import Decimal from 'decimal.js'
import { DateTime, DurationLike } from 'luxon'

import { asyncSleep } from './async'
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
    console.log(metadata)
    const valueResult = metadata.attributes?.find((attr) =>
      attr.trait_type === 'Estimated value in USD',
    )
    if (!valueResult) {
      console.error('No estimated value found')
      return
    }
    const value = new Decimal(valueResult.value).toDecimalPlaces(2)
    console.log(`Value is $${value}`)
    const network = this.config.networks[tokenIdentity.network]
    const durationDays = Math.floor(
      Math.random() *
      (network.nftfi.loans.durationDaysMax -
        network.nftfi.loans.durationDaysMin) +
      network.nftfi.loans.durationDaysMin,
    )
    const principal = value.times(
      network.nftfi.loans.principalScale,
    )
    const apr =
      Math.ceil(
        (Math.random() *
          (network.nftfi.loans.aprMax -
            network.nftfi.loans.aprMin) +
          network.nftfi.loans.aprMin) *
        10_000,
      ) / 10_000
    const interest = Math.ceil(((apr * durationDays) / 365) * 10_000) / 10_000
    const repayment = principal.times(1 + interest)
    const nftfi = await this.nftfi.getNftfiClient(tokenIdentity.network)
    const terms: LoanTerms = {
      currency: nftfi.config.erc20.usdc.address,
      duration: this.getTermInSeconds({
        days: durationDays,
      }),
      expiry: this.getTermInSeconds({
        days: network.nftfi.loans.offerExpirationDays,
      }),
      principal: this.decimalToUsdcScale(network, principal),
      repayment: this.decimalToUsdcScale(network, repayment),
    }
    console.log('Loan terms', { terms })
    try {
      await this.nftfi.createOffer(tokenIdentity, terms)
    } catch (err) {
      console.error('Error creating NFTfi offer...', err)
    }
  }

  private readonly decimalToUsdcScale = (network: NetworkConfig, num: Decimal): string => {
    const usdc = Object.values(network.alchemy.currencies).find((currency) =>
      currency.symbol.toLocaleLowerCase() === 'usdc')
    if (!usdc) {
      throw new Error('USDC currency not defined for network')
    }
    return num.times(usdc?.scale).toFixed(0)
  }

  private readonly getTermInSeconds = (duration: DurationLike): PositiveInteger =>
    Math.ceil(DateTime.utc().plus(duration).diffNow().as('seconds'))
}

const bot = new FabricaLoanBot()
void bot.start()
