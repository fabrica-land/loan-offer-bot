import { MeshInstance } from '@graphql-mesh/runtime'
import { GraphQLOperation } from '@graphql-mesh/types'
import { ExecutionResult } from 'graphql'
import stringify from 'json-stringify-safe'

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
import { TokenIdentity } from './types/token-identity'

export class GraphProtocol {
  private _graphProtocolClient: MeshInstance | undefined

  constructor(private readonly config: Config) {}

  private readonly getGraphProtocolClient = async (): Promise<MeshInstance> => {
    if (!this._graphProtocolClient) {
      this._graphProtocolClient = await getBuiltGraphClient()
    }
    return this._graphProtocolClient
  }

  public async getToken(tokenIdentity: TokenIdentity): Promise<FabricaToken> {
    console.debug(
      {
        network: tokenIdentity.network,
        contractAddress: tokenIdentity.contractAddress,
        tokenId: tokenIdentity.tokenId,
      },
      `Getting token ${tokenIdentity.tokenId} from The Graph on ${Blockchain.logString(tokenIdentity)}`,
    )
    const network = this.config.networks[tokenIdentity.network]
    const query = this.getTokenQuery(network)
    const result = await this.executeGraphQuery(query)
    let parsed: FabricaTokensSubgraphResult
    try {
      parsed = FabricaTokensSubgraphResult.parse(result)
    } catch (err) {
      const message = `getToken result is not in expected format for token ${tokenIdentity.tokenId} on ${Blockchain.logString(tokenIdentity)}\n${isPlainObject(err) ? err.message : err}`
      console.warn(
        { err, ...tokenIdentity, result: stringify(result, undefined, 2) },
        message,
      )
      throw new Error(message)
    }
    const tokens = parsed.data.tokens.map((token) => ({
      ...tokenIdentity,
      ...token,
    }))
    if (tokens.length < 1) {
      throw new Error(
        `No token with id ${tokenIdentity.tokenId} found on ${Blockchain.logString(tokenIdentity)}`,
      )
    }
    return tokens[0]
  }

  public async getAllTokensForContract(
    contractIdentity: ContractIdentity,
  ): Promise<Array<FabricaToken>> {
    const network = this.config.networks[contractIdentity.network]
    if (network.logging.verbose) {
      console.debug(
        { network: contractIdentity.network },
        `Getting all tokens from The Graph for the ${titleCase(
          contractIdentity.network,
        )} network`,
      )
    }
    const query = this.getAllTokensQuery(network)
    const result = await this.executeGraphQuery(query)
    let parsed: FabricaTokensSubgraphResult
    try {
      parsed = FabricaTokensSubgraphResult.parse(result)
    } catch (err) {
      const message = `getAllTokensForContract result is not in expected format on ${Blockchain.logString(contractIdentity)}\n${isPlainObject(err) ? err.message : err}`
      console.warn(
        { err, ...contractIdentity, result: stringify(result, undefined, 2) },
        message,
      )
      throw new Error(message)
    }
    const tokens = parsed.data.tokens.map((token) => ({
      ...contractIdentity,
      ...token,
    }))
    if (network.logging.verbose) {
      console.debug(
        { tokens },
        `Received all (${
          tokens.length
        }) tokens from The Graph for ${Blockchain.logString(contractIdentity)}`,
      )
    }
    return tokens
  }

  private readonly getTokenQuery = (
    network: NetworkConfig,
  ): GraphQLOperation<unknown, unknown> => {
    return `#graphql
      query ${titleCase(network.name)}Token($tokenId: String) {
        tokens: ${network.name}_tokens(where: { tokenId: $tokenId }, first: 1000) {
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
