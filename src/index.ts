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
import { PositiveInteger } from './types/positive-integer'
import { PositiveIntegerString } from './types/positive-integer-string'
import { TokenIdentity } from './types/token-identity'
import { Blockchain } from './blockchain'
import { BigNumber } from 'ethers'

const WAIT_FOR_ESTIMATED_VALUE_SECONDS = 30

class FabricaLoanBot {
  private readonly blockchain: Blockchain
  private readonly config: Config
  private readonly fabrica: Fabrica
  private readonly nftfi: Nftfi

  constructor(config: Config) {
    this.config = config
    this.blockchain = new Blockchain(this.config)
    this.fabrica = new Fabrica(this.blockchain, this.config)
    this.nftfi = new Nftfi(this.blockchain, this.config)
    this.fabrica.addMintListener(this.processMint)
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
        (soFar, attr) => ({ ...soFar, [attr.trait_type]: attr.value }),
        {},
      ) ?? {}
    console.log(attributes)
    const network = this.config.networks[tokenIdentity.network]
    const nftfi = await this.nftfi.getNftfiClient(tokenIdentity.network, network.lending.lendingWalletPrivateKey)
    const lenderBalanceResult = await nftfi.erc20.balanceOf({
      account: { address: nftfi.account.getAddress() },
      token: { address: nftfi.config.erc20.usdc.address },
    })
    const lenderBalance = nftfi.utils.formatUnits(
      BigNumber.from(lenderBalanceResult).toString(),
      nftfi.config.erc20.usdc.unit,
    )
    console.log({ lenderBalanceResult, lenderBalance })
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
      if (rule.percentChanceToLend && Math.floor(Math.random() * 100) > rule.percentChanceToLend) {
        return
      }
      if (rule.filter && !vm.runInContext(rule.filter, context)) {
        return
      }
      const principal = new Decimal(vm.runInContext(
        rule.loanPrincipal,
        context,
      ))
      console.log({ principal })
      const apr = new Decimal(vm.runInContext(rule.loanApr, context))
      console.log({ apr })
      const durationDays = rule.loanDurationDays
      console.log({ durationDays })
      const interest = apr.times(durationDays).div(365)
      console.log({ interest })
      const repayment = principal.times(interest.plus(1))
      console.log({ repayment })
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
      console.log('Loan terms', terms)
      try {
        await this.nftfi.createOffer(tokenIdentity, terms, network.lending.lendingWalletPrivateKey)
      } catch (err) {
        console.error('Error creating NFTfi offer...', err)
      }
    })
  }

  private readonly getTermInSeconds = (duration: DurationLike): PositiveInteger =>
    Math.ceil(DateTime.utc().plus(duration).diffNow().as('seconds'))

  private readonly decimalToUsdcScaleString = (nftfi: any, value: Decimal): PositiveIntegerString =>
    nftfi.utils.formatWei(value.toFixed(5), nftfi.config.erc20.usdc.unit).toBigInt().toString()
}

new FabricaLoanBot(getConfig())
