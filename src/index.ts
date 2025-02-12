// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import NftfiSdk from '@nftfi/js'
import { CrockfordBase32 } from 'crockford-base32'
import Decimal from 'decimal.js-light'
import { BigNumber } from 'ethers'
import { DateTime, DurationLike } from 'luxon'
import * as vm from 'node:vm'
import * as cron from 'node-cron'

import { OnRampDto } from './api'
import { asyncEachSerial, asyncSleep } from './async'
import { Blockchain } from './blockchain'
import { getConfig } from './config'
import { Fabrica } from './fabrica'
import { GraphProtocol } from './graph-protocol'
import { Nftfi } from './nftfi'
import { Config } from './types/config'
import { ContractIdentity } from './types/contract-identity'
import { EthereumAddress, ZERO_ADDRESS } from './types/ethereum-address'
import { FabricaToken, FabricaTokenProperties } from './types/fabrica-token'
import { PrefixedHexString } from './types/hex-string'
import { LoanTerms } from './types/loan-terms'
import { NetworkConfig } from './types/network.config'
import { NftMetadata } from './types/nft-metadata'
import { NftfiOffers } from './types/nftfi-offer'
import { NonEmptyString } from './types/non-empty-string'
import { PositiveInteger } from './types/positive-integer'
import { PositiveIntegerString } from './types/positive-integer-string'
import { titleCase } from './types/strings'
import { durationToFriendlyString } from './types/time'
import { TokenIdentity } from './types/token-identity'

const WAIT_FOR_ESTIMATED_VALUE_SECONDS = 120

process.on('unhandledRejection', (error) => {
  // Will print "unhandledRejection err is not defined"
  console.error('unhandledRejection', error)
})

class FabricaLoanBot {
  private readonly blockchain: Blockchain
  private readonly config: Config
  private readonly fabrica: Fabrica
  private readonly graph: GraphProtocol
  private readonly nftfi: Nftfi

  constructor(config: Config) {
    this.config = config
    this.blockchain = new Blockchain(this.config)
    this.fabrica = new Fabrica(this.blockchain, this.config)
    this.graph = new GraphProtocol(this.config)
    this.nftfi = new Nftfi(this.blockchain, this.config)
    if (this.config.lendOnTokenMint) {
      this.fabrica.addMintListener(this.processMint)
    }
    Object.values(this.config.networks).forEach((network) => {
      if (network.lending.enabled) {
        if (!network.lending.simulate) {
          cron.schedule(network.lending.periodicity, () =>
            this.periodicallyOfferLoans(network),
          )
        }
        void this.periodicallyOfferLoans(network)
      }
    })
  }

  private readonly processMint = async (
    tokenIdentity: TokenIdentity,
    operator: EthereumAddress,
    to: EthereumAddress,
    amount: PositiveIntegerString,
    blockNumber: PositiveInteger,
    transactionHash: PrefixedHexString,
  ): Promise<void> => {
    const network = this.config.networks[tokenIdentity.network]
    if (!network.lending.enabled) {
      console.log(
        `Detected a mint on ${titleCase(tokenIdentity.network)}, but lending is disabled on that network`,
      )
      return
    }
    console.log(
      `Detected a mint! Waiting ${WAIT_FOR_ESTIMATED_VALUE_SECONDS} seconds for estimated value...`,
      {
        tokenIdentity,
        operator,
        to,
        amount,
        blockNumber,
        transactionHash,
      },
    )
    await asyncSleep(WAIT_FOR_ESTIMATED_VALUE_SECONDS * 1_000)
    const nftfi = await this.nftfi.getNftfiClient(
      network.name,
      network.lending.lendingWalletPrivateKey,
    )
    const lenderBalanceResult = await nftfi.erc20.balanceOf({
      account: { address: nftfi.account.getAddress() },
      token: { address: nftfi.config.erc20.usdc.address },
    })
    const lenderBalance = nftfi.utils.formatUnits(
      BigNumber.from(lenderBalanceResult).toString(),
      nftfi.config.erc20.usdc.unit,
    )
    const token = await this.graph.getToken(tokenIdentity)
    await this.makeOffersForToken(network, nftfi, token, lenderBalance)
  }

  private readonly periodicallyOfferLoans = async (
    network: NetworkConfig,
  ): Promise<void> => {
    const contractIdentity: ContractIdentity = {
      network: network.name,
      contractAddress: network.fabrica.tokenContractAddress,
    }
    if (network.logging.verbose) {
      console.log(
        `Making periodic check to create loan offers on ${Blockchain.logString(contractIdentity)}`,
      )
    }
    const lenderBalance = await this.nftfi.getUsdcBalance(
      network,
      network.lending.lendingWalletAddress,
    )
    const nftfi = await this.nftfi.getNftfiClient(
      network.name,
      network.lending.lendingWalletPrivateKey,
    )
    if (this.config.lendOnPremints) {
      const premints = await this.fabrica.getPremints(contractIdentity)
      await asyncEachSerial(premints, async (premint) => {
        await this.makeOffersForPremint(network, nftfi, premint, lenderBalance)
      })
    }
    const tokens = await this.graph.getAllTokensForContract(contractIdentity)
    await asyncEachSerial(tokens, async (token) => {
      await this.makeOffersForToken(network, nftfi, token, lenderBalance)
    })
  }

  private readonly makeOffersForToken = async (
    network: NetworkConfig,
    nftfi: NftfiSdk,
    token: FabricaToken,
    lenderBalance: string,
  ): Promise<void> => {
    const owner = token.balances.find((balance) => BigInt(balance.balance) > 0)
      ?.owner?.address
    if (!owner) {
      if (network.logging.verbose) {
        console.warn(
          `No owner found for token ${token.tokenId} on ${Blockchain.logString(token)}; skipping`,
        )
      }
      return
    }
    let properties: FabricaTokenProperties
    try {
      properties = await this.fabrica.getProperties(token)
    } catch (err) {
      if (network.logging.verbose) {
        console.warn(
          { err },
          `Error getting token properties for token ${token.tokenId} on ${Blockchain.logString(token)}`,
        )
      }
      return
    }
    let metadata: NftMetadata
    try {
      metadata = await this.fabrica.getMetadata(token)
    } catch (err) {
      if (network.logging.verbose) {
        console.warn(
          { err },
          `Error getting metadata for token ${token.tokenId} on ${Blockchain.logString(token)}`,
        )
      }
      return
    }
    const attributes = FabricaLoanBot.getAttributes(metadata)
    const context = vm.createContext({
      Math,
      bnpl: {
        address: network.nftfi.bnplContractAddress,
      },
      token: {
        ...properties,
        attributes,
        owner,
      },
      wallet: {
        balances: {
          usdc: lenderBalance,
        },
      },
    })
    let existingOffers: NftfiOffers
    try {
      existingOffers = await this.nftfi.getOffers(
        token,
        network.lending.lendingWalletAddress,
        token.tokenId,
      )
    } catch (err) {
      console.error(
        `Failed to get NFTfi offers for token ${token.tokenId} on ${Blockchain.logString(token)}`,
      )
      return
    }
    await this.processRulesAndMakeLoans(
      network,
      token,
      context,
      nftfi,
      existingOffers,
      metadata,
    )
  }

  private readonly processRulesAndMakeLoans = async (
    network: NetworkConfig,
    tokenIdentity: TokenIdentity,
    context: vm.Context,
    nftfi: NftfiSdk,
    existingOffers: NftfiOffers,
    metadata: NftMetadata,
  ): Promise<void> => {
    await asyncEachSerial(network.lending.offerRules, async (rule) => {
      if (rule.filter && !vm.runInContext(rule.filter, context)) {
        if (network.logging.verbose) {
          console.log(
            `Property doesn't meet the rule's filter "${rule.filter}": skipping offer for token ${tokenIdentity.tokenId} on ${Blockchain.logString(tokenIdentity)}`,
          )
        }
        return
      }
      let borrowerAddress = ZERO_ADDRESS
      if (rule.borrower) {
        try {
          borrowerAddress = EthereumAddress.parse(
            vm.runInContext(rule.borrower, context),
          )
        } catch (err) {
          console.warn({ err }, `Borrower rule invalid: "${rule.borrower}"`)
          return
        }
      }
      if (
        rule.percentChanceToLend &&
        Math.floor(Math.random() * 100) > rule.percentChanceToLend
      ) {
        if (network.logging.verbose) {
          console.log(
            `Percent chance to lend of ${rule.percentChanceToLend} not cleared: skipping offer for token ${tokenIdentity.tokenId} on ${Blockchain.logString(tokenIdentity)}`,
          )
        }
        return
      }
      const principal = new Decimal(
        vm.runInContext(rule.loanPrincipal, context),
      )
      const apr = new Decimal(vm.runInContext(rule.loanApr, context))
      const durationDays = rule.loanDurationDays
      const interest = apr.times(durationDays).div(365)
      const repayment = principal.times(interest.plus(1))
      if (
        principal.lte(0) ||
        repayment.lte(0) ||
        principal.toString() === 'NaN' ||
        repayment.toString() === 'NaN'
      ) {
        if (network.logging.verbose) {
          console.warn(
            `Skipping making a loan offer for token ${tokenIdentity.tokenId} on ${Blockchain.logString(tokenIdentity)} since principal (${principal}) or repayment (${repayment}) are not both positive numbers`,
          )
        }
        return
      }
      const terms: LoanTerms = {
        currency: nftfi.config.erc20.usdc.address,
        duration: this.getTermInSeconds({
          days: durationDays,
        }),
        expiry: this.getTermInSeconds({
          days: rule.offerExpirationDays,
        }),
        principal: this.decimalToUsdcScaleString(nftfi, principal),
        repayment: this.decimalToUsdcScaleString(nftfi, repayment),
      }
      const existingOffer = existingOffers.find((offer) => {
        return (
          offer.borrower.address.toLocaleLowerCase() ===
            borrowerAddress.toLocaleLowerCase() &&
          new Decimal(offer.terms.loan.principal).eq(principal) &&
          new Decimal(offer.terms.loan.repayment).eq(repayment) &&
          offer.terms.loan.duration === terms.duration
        )
      })
      if (existingOffer) {
        if (network.logging.verbose) {
          console.log(
            `Loan already exists for ${metadata.name} with principal $${principal}, APR ${apr.times(100)}%, duration ${durationToFriendlyString(terms.duration)}, targeting borrower $${borrowerAddress}`,
          )
        }
        return
      }
      if (network.lending.simulate) {
        console.log(
          `${metadata.name} - ${network.soilBaseUrl}/property/${network.name}/${tokenIdentity.tokenId} - $${principal} - ${apr.times(100)}% - ${durationToFriendlyString(terms.duration)} - $${borrowerAddress}`,
        )
        return
      }
      console.log(
        `Creating loan offer for token ${tokenIdentity.tokenId} on ${Blockchain.logString(tokenIdentity)} with these terms`,
        terms,
      )
      try {
        await this.nftfi.createOffer(
          tokenIdentity,
          terms,
          network.lending.lendingWalletPrivateKey,
          borrowerAddress,
        )
      } catch (err) {
        console.error('Error creating NFTfi offer...', err)
        return
      }
    })
  }

  private readonly makeOffersForPremint = async (
    network: NetworkConfig,
    nftfi: NftfiSdk,
    premint: OnRampDto,
    lenderBalance: string,
  ): Promise<void> => {
    const tokenIdentity = TokenIdentity.parse(premint)
    const owner = Object.entries(premint.recipients).find(
      ([_, balance]) => BigInt(balance) > 0,
    )?.[0]
    if (!owner) {
      if (network.logging.verbose) {
        console.warn(
          `No owner found for token ${premint.tokenId} on ${Blockchain.logString(tokenIdentity)}; skipping`,
        )
      }
      return
    }
    let metadata: NftMetadata
    try {
      metadata = await this.fabrica.getMetadata(tokenIdentity)
    } catch (err) {
      if (network.logging.verbose) {
        console.warn(
          { err },
          `Error getting metadata for token ${premint.tokenId} on ${Blockchain.logString(tokenIdentity)}`,
        )
      }
      return
    }
    const attributes = FabricaLoanBot.getAttributes(metadata)
    const supply = Object.values(premint.recipients).reduce(
      (soFar, amount) => soFar + amount,
    )
    const context = vm.createContext({
      Math,
      bnpl: {
        address: network.nftfi.bnplContractAddress,
      },
      token: {
        supply,
        operatingAgreement: premint.operatingAgreement,
        definition: {
          claim: premint.legalDescription ?? '',
          coordinates: {
            lat: premint.lat,
            lon: premint.lon,
          },
          geoJson: premint.geoJson,
          holdingEntity: FabricaLoanBot.getTrustName(premint.tokenId),
          offchainRegistrar: {
            country: premint.country,
            adminId: premint.adminId,
            admin: '',
            propertyId: premint.propertyId,
          },
        },
        configuration: {
          userDescription: premint.userDescription ?? undefined,
          vendor: premint.vendor ?? undefined,
          vendorId: premint.vendorId ?? undefined,
        },
        attributes,
        owner,
      },
      wallet: {
        balances: {
          usdc: lenderBalance,
        },
      },
    })
    let existingOffers: NftfiOffers
    try {
      existingOffers = await this.nftfi.getOffers(
        tokenIdentity,
        network.lending.lendingWalletAddress,
        premint.tokenId,
      )
    } catch (err) {
      console.error(
        `Failed to get NFTfi offers for token ${premint.tokenId} on ${Blockchain.logString(tokenIdentity)}`,
      )
      return
    }
    await this.processRulesAndMakeLoans(
      network,
      tokenIdentity,
      context,
      nftfi,
      existingOffers,
      metadata,
    )
  }

  private readonly getTermInSeconds = (
    duration: DurationLike,
  ): PositiveInteger =>
    Math.ceil(DateTime.utc().plus(duration).diffNow().as('seconds'))

  private readonly decimalToUsdcScaleString = (
    nftfi: any,
    value: Decimal,
  ): PositiveIntegerString =>
    nftfi.utils
      .formatWei(
        value.toFixed(5, Decimal.ROUND_UP),
        nftfi.config.erc20.usdc.unit,
      )
      .toBigInt()
      .toString()

  private static getAttributes = (
    metadata: NftMetadata,
  ): Record<string, string | number> => {
    return (
      metadata.attributes?.reduce(
        (soFar, attr) => ({ ...soFar, [attr.trait_type]: attr.value }),
        {},
      ) ?? {}
    )
  }

  private static readonly getTrustName = (
    tokenId: PositiveIntegerString,
  ): NonEmptyString =>
    `Fabrica ${FabricaLoanBot.crockfordEncodeNumber(tokenId)} Trust`

  private static readonly crockfordEncodeNumber = (
    value: PositiveIntegerString,
  ): NonEmptyString =>
    CrockfordBase32.encode(Buffer.from(BigInt(value).toString(16), 'hex'))
}

new FabricaLoanBot(getConfig())
