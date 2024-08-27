import { Log } from '@ethersproject/abstract-provider'
import { BigNumber, ContractInterface, ethers } from 'ethers'

import { asyncEachSerial } from './async'
import { Blockchain } from './blockchain'
import rawFabricaTokenAbi from './data/fabrica-1155.abi.json'
import { fetchOrThrow } from './fetch'
import { Config, NetworkName } from './types/config'
import { ContractIdentity } from './types/contract-identity'
import { EthereumAddress, ZERO_ADDRESS } from './types/ethereum-address'
import { FabricaTokenProperties } from './types/fabrica-token'
import { PrefixedHexString } from './types/hex-string'
import { NftMetadata } from './types/nft-metadata'
import { PositiveInteger } from './types/positive-integer'
import { PositiveIntegerString } from './types/positive-integer-string'
import { TokenIdentity } from './types/token-identity'
import { HttpUrlString } from './types/url-strings'

const fabricaTokenAbi: ContractInterface = rawFabricaTokenAbi

type MintListener = (
  tokenIdentity: TokenIdentity,
  operator: EthereumAddress,
  to: EthereumAddress,
  amount: PositiveIntegerString,
  blockNumber: PositiveInteger,
  transactionHash: PrefixedHexString,
) => unknown

export class Fabrica {
  private readonly mintListeners = new Set<MintListener>()

  constructor(
    private readonly blockchain: Blockchain,
    private readonly config: Config,
  ) {
    this.startListeners()
  }

  public readonly addMintListener = (listener: MintListener): void => {
    this.mintListeners.add(listener)
  }

  public readonly getProperties = async (
    tokenIdentity: TokenIdentity,
  ): Promise<FabricaTokenProperties> => {
    const propertiesResult = await this.blockchain.executeContractMethod(
      tokenIdentity,
      fabricaTokenAbi,
      '_property',
      undefined,
      tokenIdentity.tokenId,
    )
    return FabricaTokenProperties.parse(propertiesResult)
  }

  public readonly getMetadata = async (
    tokenIdentity: TokenIdentity,
  ): Promise<NftMetadata> => {
    const urlResult = await this.blockchain.executeContractMethod(
      tokenIdentity,
      fabricaTokenAbi,
      'uri',
      undefined,
      tokenIdentity.tokenId,
    )
    const metadataUrl = HttpUrlString.parse(urlResult)
    const result = await fetchOrThrow(metadataUrl)
    return NftMetadata.parse(result)
  }

  private readonly startListeners = () => {
    Object.entries(this.config.networks).forEach(([network, config]) => {
      this.blockchain.addListener(
        {
          network: network as NetworkName,
          contractAddress: config.fabrica.tokenContractAddress,
        },
        'TransferSingle(address,address,address,uint256,uint256)',
        this.handleMintEvent,
      )
      this.blockchain.addListener(
        {
          network: network as NetworkName,
          contractAddress: config.fabrica.tokenContractAddress,
        },
        'TransferBatch(address,address,address,uint256[],uint256[])',
        this.handleMintEvent,
      )
    })
  }

  private readonly handleMintEvent = async (
    contractIdentity: ContractIdentity,
    log: Log,
  ): Promise<void> => {
    console.log('Transfer event detected', contractIdentity, log)
    const network = this.config.networks[contractIdentity.network]
    const contract = new ethers.Contract(
      network.fabrica.tokenContractAddress,
      fabricaTokenAbi,
    )
    const logDescription = contract.interface.parseLog(log)
    const operator = logDescription.args[0]
    const from = logDescription.args[1]
    const to = logDescription.args[2]
    const amount = BigNumber.from(logDescription.args[4]._hex).toString()
    if (from !== ZERO_ADDRESS) {
      console.log('Not a mint event... ignoring')
      return
    }
    const blockNumber = log.blockNumber
    const transactionHash = log.transactionHash
    const tokenIdObjects: Array<{ _hex: PrefixedHexString }> =
      logDescription.name === 'TransferSingle'
        ? [logDescription.args[3]]
        : logDescription.args[3]
    const tokenIds = tokenIdObjects.map((obj) =>
      BigNumber.from(obj._hex).toString(),
    )
    await asyncEachSerial(tokenIds, async (tokenId) => {
      await asyncEachSerial([...this.mintListeners], async (listener) => {
        try {
          await listener(
            { ...contractIdentity, tokenId },
            operator,
            to,
            amount,
            blockNumber,
            transactionHash,
          )
        } catch (err) {
          console.error('Error processing mint event\n', err)
        }
      })
    })
  }
}
