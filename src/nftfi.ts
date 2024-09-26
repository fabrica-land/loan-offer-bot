// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import NftfiSdk from '@nftfi/js'
import Decimal from 'decimal.js'
import { BigNumber } from 'ethers'
import { StatusCodes } from 'http-status-codes'
import stringify from 'json-stringify-safe'

import { Blockchain } from './blockchain'
import { Config, NetworkName } from './types/config'
import { ContractIdentity } from './types/contract-identity'
import { EthereumAddress, ZERO_ADDRESS } from './types/ethereum-address'
import { LoanTerms } from './types/loan-terms'
import { NetworkConfig } from './types/network.config'
import { NftfiOffer, NftfiOffers } from './types/nftfi-offer'
import { NonEmptyString } from './types/non-empty-string'
import { isPlainObject } from './types/plain-object'
import { PositiveIntegerString } from './types/positive-integer-string'
import { TokenIdentity } from './types/token-identity'

export class Nftfi {
  constructor(
    private readonly blockchain: Blockchain,
    private readonly config: Config,
  ) {}

  public readonly getNftfiClient = async (
    networkName: NetworkName,
    walletPrivateKey: NonEmptyString,
  ): Promise<NftfiSdk> => {
    const network = this.config.networks[networkName]
    const provider = await this.blockchain
      .getAlchemyClient(network.alchemy)
      .config.getProvider()
    return await NftfiSdk.init({
      config: {
        api: {
          ...(network.nftfi.apiBaseUri
            ? { baseURI: network.nftfi.apiBaseUri }
            : undefined),
          key: network.nftfi.apiKey,
          ...(network.nftfi.website
            ? { website: network.nftfi.website }
            : undefined),
        },
      },
      ethereum: {
        account: {
          privateKey: `0x${walletPrivateKey}`,
        },
        provider: { url: provider.connection.url },
      },
    })
  }

  public readonly getUsdcBalance = async (
    network: NetworkConfig,
    walletAddress: EthereumAddress,
  ): Promise<PositiveIntegerString> => {
    const nftfi = await this.getNftfiClient(
      network.name,
      network.lending.lendingWalletPrivateKey,
    )
    const lenderBalanceResult = await nftfi.erc20.balanceOf({
      account: { address: walletAddress },
      token: { address: nftfi.config.erc20.usdc.address },
    })
    const lenderBalance = nftfi.utils.formatUnits(
      BigNumber.from(lenderBalanceResult).toString(),
      nftfi.config.erc20.usdc.unit,
    )
    return lenderBalance
  }

  public readonly getOffers = async (
    contractIdentity: ContractIdentity,
    lenderAddress?: EthereumAddress,
    tokenId?: PositiveIntegerString,
    specificLoanContractName?: NonEmptyString,
  ): Promise<NftfiOffers> => {
    const network = this.config.networks[contractIdentity.network]
    const nftfi = await this.getNftfiClient(
      contractIdentity.network,
      network.lending.lendingWalletPrivateKey,
    )
    const result = await nftfi.offers.get({
      filters: {
        lender: { address: { eq: lenderAddress } },
        nft: {
          address: contractIdentity.contractAddress,
          id: tokenId,
        },
        nftfi: { contract: specificLoanContractName },
      },
    })
    const asArray = Array.isArray(result) ? result : [result]
    let offers: NftfiOffers
    try {
      offers = NftfiOffers.parse(asArray)
    } catch (err) {
      const message = `Unexpected response getting offers for ${Blockchain.logString(contractIdentity)}:\n${stringify(
        result,
        undefined,
        2,
      )}`
      console.warn(
        {
          ...contractIdentity,
          result,
          err,
        },
        message,
      )
      throw new Error(message)
    }
    offers.forEach((offer) => {
      offer.signature = null
    })
    return offers
  }

  public readonly createOffer = async (
    token: TokenIdentity,
    terms: LoanTerms,
    walletPrivateKey: NonEmptyString,
    borrowerAddress: EthereumAddress = ZERO_ADDRESS,
  ): Promise<NftfiOffer> => {
    const network = this.config.networks[token.network]
    const nftfi = await this.getNftfiClient(token.network, walletPrivateKey)
    // Make sure the lender wallet has enough coin
    const lenderBalance = await nftfi.erc20.balanceOf({
      account: { address: nftfi.account.getAddress() },
      token: { address: terms.currency },
    })
    const decimalLenderBalance = new Decimal(lenderBalance.toString())
    const decimalPrincipal = new Decimal(terms.principal)
    if (decimalLenderBalance.lt(decimalPrincipal)) {
      const message = `Lender balance of ${lenderBalance} is lower than principal amount of ${terms.principal}`
      console.warn(message, { lenderBalance, principal: terms.principal })
      throw new Error(message)
    }
    // Allow NFTfi to spend up to the total of all outstanding offers, including this one
    // 1. Check current allowance
    const currentAllowance = BigInt(
      await nftfi.erc20.allowance({
        account: { address: nftfi.account.getAddress() },
        token: { address: terms.currency },
        nftfi: { contract: { name: network.nftfi.defaultLoanContractName } },
      }),
    )
    // 2. Sum up the principals of the lender's outstanding NFTfi offers
    const offers = await this.getOffers(
      token,
      network.lending.lendingWalletAddress,
      token.tokenId,
      network.nftfi.defaultLoanContractName,
    )
    const sumOfOutstandingOffers = offers.reduce(
      (
        sum: bigint,
        offer: { terms: { loan: { principal: number | string } } },
      ) => sum + BigInt(offer.terms.loan.principal),
      0n,
    )
    // 3. Using the minimum of these two values as a basis, increase the allowance; this
    //    way, if NFTfi is honest, we lower the allowance as old offers expire, and if
    //    they are not, we only increase the allowance by this offer's principal
    const minimumBasis =
      currentAllowance < sumOfOutstandingOffers
        ? currentAllowance
        : sumOfOutstandingOffers
    const amountToApprove = minimumBasis + BigInt(terms.principal)
    await nftfi.erc20.approve({
      amount: amountToApprove.toString(),
      token: { address: terms.currency },
      nftfi: { contract: { name: network.nftfi.defaultLoanContractName } },
    })
    // Publish the offer
    const createOffer = {
      terms,
      nft: {
        address: token.contractAddress,
        id: token.tokenId,
      },
      borrower: { address: borrowerAddress },
      nftfi: { contract: { name: network.nftfi.defaultLoanContractName } },
    }
    console.debug('Creating NFTfi offer...', { createOffer })
    const response = await nftfi.offers.create(createOffer)
    if (response.code && response.code >= StatusCodes.BAD_REQUEST) {
      const message = `Error creating offer: HTTP ${response.code} ${response.message}`
      console.warn(message, { result: response })
      throw new Error(message)
    }
    if (isPlainObject(response.errors)) {
      const [firstCode, firstError] = Object.entries(response.errors)[0]
      const message =
        Array.isArray(firstError) &&
        NonEmptyString.safeParse(firstError[0]).success
          ? `Error creating offer: ${firstCode}: ${firstError[0]}`
          : 'Unknown error creating offer'
      console.warn(message, { result: response })
      throw new Error(message)
    }
    const { result } = response
    let nftfiOffer: NftfiOffer
    try {
      nftfiOffer = NftfiOffer.parse(result)
    } catch (err) {
      const message = `Unexpected result creating NFTfi offer\n${stringify(
        result,
        undefined,
        2,
      )}`
      console.warn(message, { err, result })
      throw new Error(message)
    }
    nftfiOffer.signature = null
    console.debug('NFTfi offer created!', stringify(nftfiOffer, undefined, 2))
    return nftfiOffer
  }
}
