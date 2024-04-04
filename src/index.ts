import * as vm from 'node:vm'
import Decimal from 'decimal.js'
import { DateTime, DurationLike } from 'luxon'

import { asyncEachSerial, asyncSleep } from './async'
import { Fabrica } from './fabrica'
import { Nftfi } from './nftfi'
import { Config, getConfig } from './types/config'
import { EthereumAddress } from './types/ethereum-address'
import { PrefixedHexString } from './types/hex-string'
import { LoanTerms } from './types/loan-terms'
import { NetworkConfig } from './types/network.config'
import { PositiveInteger } from './types/positive-integer'
import { PositiveIntegerString } from './types/positive-integer-string'
import { TokenIdentity } from './types/token-identity'
import { Blockchain } from './blockchain'
import { NonEmptyString } from './types/non-empty-string'
import { NftMetadata } from './types/nft-metadata'
import { BigNumber } from 'ethers'

const WAIT_FOR_ESTIMATED_VALUE_SECONDS = 10

class FabricaLoanBot {
  private blockchain: Blockchain
  private config: Config
  private fabrica: Fabrica
  private nftfi: Nftfi

  public readonly start = async () => {
    this.config = await getConfig()
    this.blockchain = new Blockchain(this.config)
    this.fabrica = new Fabrica(this.blockchain, this.config)
    this.fabrica.addMintListener(this.processMint)
    this.nftfi = new Nftfi(this.blockchain, this.config)
  }

  private readonly processMint = async (
    tokenIdentity: TokenIdentity,
    operator: EthereumAddress,
    to: EthereumAddress,
    amount: PositiveIntegerString,
    blockNumber: PositiveInteger,
    transactionHash: PrefixedHexString,
  ): Promise<void> => {
    console.log(`Detected a mint! Waiting ${WAIT_FOR_ESTIMATED_VALUE_SECONDS} seconds for estimated value...`, {
      tokenIdentity,
      operator,
      to,
      amount,
      blockNumber,
      transactionHash,
    })
    await asyncSleep(WAIT_FOR_ESTIMATED_VALUE_SECONDS * 1_000)
    const metadata = await this.fabrica.getMetadata(tokenIdentity)
    const attributes: Record<string, string | number> =
      metadata.attributes?.reduce(
        (soFar, attr) => ({ ...soFar, [attr.trait_type ?? '']: attr.value }),
        {},
      ) ?? {}
    console.log(metadata)
    console.log(attributes)
    const valueResult = attributes['Estimated value in USD']
    if (!valueResult) {
      console.error('No estimated value found in NFT metadata')
      return
    }
    const value = new Decimal(valueResult).toDecimalPlaces(2)
    console.log(`Value is $${value}`)
    if (!attributes.State) {
      console.error('No state value found in NFT metadata')
      return
    }
    const state = String(attributes.State)
    const network = this.config.networks[tokenIdentity.network]
    // TODO: Get NFTfi wallet without private key
    const nftfi = await this.nftfi.getNftfiClient(tokenIdentity.network, network.lending.lendingWalletPrivateKey)
    const usdc = Object.values(network.currencies).find((currency) =>
      currency.symbol.toLocaleLowerCase() === 'usdc')
    if (!usdc) {
      throw new Error('USDC currency not defined for network')
    }
    const lenderBalanceResult = await nftfi.erc20.balanceOf({
      account: { address: nftfi.account.getAddress() },
      token: { address: usdc.address },
    })
    console.log({ lenderBalanceResult })
    const lenderBalance = new Decimal(lenderBalanceResult.toString()).div(Decimal.pow(10, usdc.scale)).toNumber()
    const context = vm.createContext({
      Math,
      attributes,
      wallet: {
        balances: {
          usdc: lenderBalance,
        },
      },
    })
    console.log(context)
    await asyncEachSerial(network.lending.offerRules, async (rule) => {
      if (!vm.runInContext(rule.filter, context)) {
        return
      }
      const principal = new Decimal(vm.runInContext(
        rule.loanPrincipal,
        context,
      ))
      const apr = new Decimal(vm.runInContext(rule.loanApr, context))
      const durationDays = rule.loanDurationDays
      const interest = apr.times(durationDays).div(365)
      const repayment = principal.times(interest.plus(1))
      const terms: LoanTerms = {
        currency: nftfi.config.erc20.usdc.address,
        duration: this.getTermInSeconds({
          days: durationDays,
        }),
        expiry: this.getTermInSeconds({
          days: rule.offerExpirationDays,
        }),
        principal: principal.times(Decimal.pow(10, usdc.scale)).toFixed(0),
        repayment: repayment.times(Decimal.pow(10, usdc.scale)).toFixed(0),
      }
      console.log('Loan terms', { terms })
      try {
        await this.nftfi.createOffer(tokenIdentity, terms, network.lending.lendingWalletPrivateKey)
      } catch (err) {
        console.error('Error creating NFTfi offer...', err)
      }
    })
  }

  private readonly getMetadataValue = (metadata: NftMetadata, traitType: NonEmptyString): string | number | null => {
    const attribute = metadata.attributes?.find((attr) =>
      attr.trait_type === traitType
    )
    if (!attribute) {
      console.error('No estimated value found')
      return null
    }
    return attribute.value
  }

  private readonly getTermInSeconds = (duration: DurationLike): PositiveInteger =>
    Math.ceil(DateTime.utc().plus(duration).diffNow().as('seconds'))
}

const bot = new FabricaLoanBot()
void bot.start()
