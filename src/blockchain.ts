import { Log } from '@ethersproject/abstract-provider'
import { AlchemyNetworkConfig } from './types/alchemy.network.config'
import { ContractIdentity } from './types/contract-identity'
import { PrefixedHexString } from './types/hex-string'
import { Alchemy, WebSocketNamespace } from 'alchemy-sdk'
import { Config } from './types/config'
import { NonEmptyString } from './types/non-empty-string'
import keccak256 from 'keccak256'

export type BlockchainEventProcessor = (
  contractIdentity: ContractIdentity,
  log: Log,
) => Promise<void>

export class Blockchain {
  private readonly alchemyClients: { [networkName: string]: Alchemy } = {}

  constructor(private readonly config: Config) {}

  public addListener = (
    contractIdentity: ContractIdentity,
    topics: Array<NonEmptyString>,
    processor: BlockchainEventProcessor,
  ): WebSocketNamespace => {
    const network = this.config.networks[contractIdentity.network]
    const topicHashes = topics.map((topic) =>
      `0x${keccak256(topic).toString('hex')}`,
    )
    return this.getAlchemyClient(network.alchemy).ws.on(
      {
        address: contractIdentity.contractAddress,
        topics,
      },
      (log: Log) => processor(contractIdentity, log),
    )
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
}
