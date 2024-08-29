// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import NftfiSdk from '@nftfi/js'
import Decimal from 'decimal.js'
import { BigNumber } from 'ethers'
import { DateTime, DurationLike } from 'luxon'
import * as vm from 'node:vm'
import * as cron from 'node-cron'

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
import { PositiveInteger } from './types/positive-integer'
import { PositiveIntegerString } from './types/positive-integer-string'
import { titleCase } from './types/strings'
import { TokenIdentity } from './types/token-identity'

const WAIT_FOR_ESTIMATED_VALUE_SECONDS = 60

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
    this.fabrica.addMintListener(this.processMint)
    Object.values(this.config.networks).forEach((network) => {
      if (network.lending.enabled) {
        cron.schedule(network.lending.periodicity, () =>
          this.periodicallyOfferLoans(network),
        )
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
    await this.makeOffers(network, nftfi, token, lenderBalance)
  }

  private readonly periodicallyOfferLoans = async (
    network: NetworkConfig,
  ): Promise<void> => {
    const contractIdentity: ContractIdentity = {
      network: network.name,
      contractAddress: network.fabrica.tokenContractAddress,
    }
    console.log(
      `Making periodic check to create loan offers on ${Blockchain.logString(contractIdentity)}`,
    )
    const tokens = await this.graph.getAllTokensForContract(contractIdentity)
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
    await asyncEachSerial(tokens, async (token) => {
      let offers: NftfiOffers
      try {
        offers = await this.nftfi.getOffers(contractIdentity, token.tokenId)
      } catch (err) {
        console.error(
          `Failed to get NFTfi offers for token ${token.tokenId} on ${Blockchain.logString(contractIdentity)}`,
        )
        return
      }
      if (offers.length < 1) {
        await this.makeOffers(network, nftfi, token, lenderBalance)
      } else {
        console.info(
          `There ${offers.length > 1 ? 'are' : 'is'} already ${offers.length > 1 ? offers.length : 'an'} offer${offers.length > 1 ? 's' : ''} made by the lending wallet for token ${token.tokenId} on ${Blockchain.logString(token)}`,
        )
      }
    })
  }

  private readonly makeOffers = async (
    network: NetworkConfig,
    nftfi: NftfiSdk,
    token: FabricaToken,
    lenderBalance: string,
  ): Promise<void> => {
    const owner = token.balances.find((balance) => BigInt(balance.balance) > 0)
      ?.owner?.address
    if (!owner) {
      console.warn(
        `No owner found for token ${token.tokenId} on ${Blockchain.logString(token)}; skipping`,
      )
      return
    }
    let properties: FabricaTokenProperties
    try {
      properties = await this.fabrica.getProperties(token)
    } catch (err) {
      console.warn(
        { err },
        `Error getting token properties for token ${token.tokenId} on ${Blockchain.logString(token)}`,
      )
      return
    }
    let metadata: NftMetadata
    try {
      metadata = await this.fabrica.getMetadata(token)
    } catch (err) {
      console.warn(
        { err },
        `Error getting metadata for token ${token.tokenId} on ${Blockchain.logString(token)}`,
      )
      return
    }
    const attributes: Record<string, string | number> =
      metadata.attributes?.reduce(
        (soFar, attr) => ({ ...soFar, [attr.trait_type]: attr.value }),
        {},
      ) ?? {}
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
    await asyncEachSerial(network.lending.offerRules, async (rule) => {
      if (
        rule.percentChanceToLend &&
        Math.floor(Math.random() * 100) > rule.percentChanceToLend
      ) {
        console.log(
          `Percent chance to lend of ${rule.percentChanceToLend} not cleared: skipping offer for token ${token.tokenId} on ${Blockchain.logString(token)}`,
        )
        return
      }
      if (rule.filter && !vm.runInContext(rule.filter, context)) {
        console.log(
          `Property doesn't meet the rule's filter "${rule.filter}": skipping offer for token ${token.tokenId} on ${Blockchain.logString(token)}`,
        )
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
        console.warn(
          `Skipping making a loan offer for token ${token.tokenId} on ${Blockchain.logString(token)} since principal (${principal}) or repayment (${repayment}) are not both positive numbers`,
        )
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
      console.log(
        `Creating loan offer for token ${token.tokenId} on ${Blockchain.logString(token)} with these terms`,
        terms,
      )
      try {
        await this.nftfi.createOffer(
          token,
          terms,
          network.lending.lendingWalletPrivateKey,
          borrowerAddress,
        )
      } catch (err) {
        console.error('Error creating NFTfi offer...', err)
      }
    })
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
      .formatWei(value.toFixed(5), nftfi.config.erc20.usdc.unit)
      .toBigInt()
      .toString()
}

new FabricaLoanBot(getConfig())
