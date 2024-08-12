import { MeshInstance } from '@graphql-mesh/runtime'
import { GraphQLOperation } from '@graphql-mesh/types'
import { ExecutionResult } from 'graphql'

import { getBuiltGraphClient } from './.graphclient'
import { Blockchain } from './blockchain'
import { Config } from './types/config'
import { ContractIdentity } from './types/contract-identity'
import {
  FabricaToken,
  FabricaTokensSubgraphResult,
} from './types/fabrica-token'
import { NetworkConfig } from './types/network.config'
import { isPlainObject } from './types/plain-object'
import { titleCase } from './types/strings'
import { TokenFieldsFragment } from './types/token-fields-fragment'

export class GraphProtocol {
  private _graphProtocolClient: MeshInstance | undefined

  constructor(private readonly config: Config) {}

  private readonly getGraphProtocolClient = async (): Promise<MeshInstance> => {
    if (!this._graphProtocolClient) {
      this._graphProtocolClient = await getBuiltGraphClient()
    }
    return this._graphProtocolClient
  }

  public async getAllTokensForContract(
    contractIdentity: ContractIdentity,
  ): Promise<Array<FabricaToken>> {
    console.debug(
      { network: contractIdentity.network },
      `Getting all tokens from The Graph for the ${titleCase(
        contractIdentity.network,
      )} network`,
    )
    const network = this.config.networks[contractIdentity.network]
    const query = this.getAllTokensQuery(network)
    const result = await this.executeGraphQuery(query)
    let parsed: FabricaTokensSubgraphResult
    try {
      parsed = FabricaTokensSubgraphResult.parse(result)
    } catch (err) {
      const message = `getAllTokensForContract result is not in expected format on ${Blockchain.logString(contractIdentity)}\n${isPlainObject(err) ? err.message : err}`
      console.warn({ err, ...contractIdentity, result }, message)
      throw new Error(message)
    }
    const tokens = parsed.data.tokens.map((token) => ({
      ...contractIdentity,
      ...token,
    }))
    console.debug(
      { tokens },
      `Received all (${
        tokens.length
      }) tokens from The Graph for ${Blockchain.logString(contractIdentity)}`,
    )
    return tokens
  }

  private readonly getAllTokensQuery = (
    network: NetworkConfig,
  ): GraphQLOperation<unknown, unknown> => {
    return `#graphql
      query ${titleCase(network.name)}AllTokens {
        tokens: ${network.name}_tokens(first: 1000) {
          ...tokenFields
        }
        meta: ${network.name}__meta {
          block {
            number
          }
        }
      }
      ${TokenFieldsFragment}
    `
  }

  private executeGraphQuery = async <TData, TVariables extends object>(
    query: GraphQLOperation<TData, TVariables>,
    variables: TVariables = {} as TVariables,
  ): Promise<ExecutionResult<TData>> => {
    const client = await this.getGraphProtocolClient()
    return client.execute(query, variables)
  }
}