import { Log } from '@ethersproject/abstract-provider'
import {
  Alchemy,
  TransactionRequest,
  Wallet,
  WebSocketNamespace,
} from 'alchemy-sdk'
import { ContractInterface, ethers } from 'ethers'
import keccak256 from 'keccak256'

import { AlchemyNetworkConfig } from './types/alchemy.network.config'
import { Config } from './types/config'
import { ContractIdentity } from './types/contract-identity'
import { NonEmptyString } from './types/non-empty-string'
import { titleCase } from './types/strings'

export type BlockchainEventProcessor = (
  contractIdentity: ContractIdentity,
  log: Log,
) => Promise<void>

export class Blockchain {
  private readonly alchemyClients: { [networkName: string]: Alchemy } = {}

  constructor(private readonly config: Config) {}

  public async executeContractMethod(
    contractIdentity: ContractIdentity,
    abi: ContractInterface,
    methodName: string,
    signingPrivateKey?: NonEmptyString,
    ...args: Array<unknown>
  ): Promise<unknown> {
    const network = this.config.networks[contractIdentity.network]
    const contract = await this.getContract(
      contractIdentity,
      abi,
      signingPrivateKey,
    )
    const method = contract[methodName]
    if (typeof method !== 'function') {
      const message = `Method ${methodName} does not exist on the ${contractIdentity.contractAddress} contract on ${contractIdentity.network}`
      console.warn(message, { methodName })
      throw new Error(message)
    }
    let result: unknown
    const txOptions: TransactionRequest = {
      gasLimit: network.transactions.gasLimit,
    }
    try {
      result = await contract[methodName](...args, txOptions)
    } catch (e) {
      console.error(e, {
        network: network.alchemy.networkName,
        methodName,
        args,
      })
      throw new Error(
        `Failed to call ${methodName} on ${network.alchemy.networkName}: ${e}`,
      )
    }
    return result
  }

  public addListener = (
    contractIdentity: ContractIdentity,
    topic: NonEmptyString,
    processor: BlockchainEventProcessor,
  ): WebSocketNamespace => {
    const network = this.config.networks[contractIdentity.network]
    const topicHash = `0x${keccak256(topic).toString('hex')}`
    return this.getAlchemyClient(network.alchemy).ws.on(
      {
        address: contractIdentity.contractAddress,
        topics: [topicHash],
      },
      (log: Log) => processor(contractIdentity, log),
    )
  }

  private async getContract(
    contractIdentity: ContractIdentity,
    abi: ContractInterface,
    signingPrivateKey?: NonEmptyString,
  ): Promise<ethers.Contract> {
    const network = this.config.networks[contractIdentity.network]
    const provider = await this.getAlchemyClient(
      network.alchemy,
    ).config.getProvider()
    const signer = signingPrivateKey
      ? new Wallet(signingPrivateKey, provider)
      : provider
    return new ethers.Contract(contractIdentity.contractAddress, abi, signer)
  }

  public getAlchemyClient(alchemy: AlchemyNetworkConfig): Alchemy {
    const client =
      this.alchemyClients[alchemy.networkName] ??
      new Alchemy({
        apiKey: alchemy.apiKey,
        network: alchemy.networkName,
      })
    this.alchemyClients[alchemy.networkName] = client
    return client
  }

  public static logString = (
    contractIdentity: ContractIdentity,
    capitalize = false,
  ): NonEmptyString =>
    `${capitalize ? 'T' : 't'}he ${contractIdentity.contractAddress} contract on ${titleCase(contractIdentity.network)}`
}
