import { z } from 'zod'

import { PrefixedHexString } from './hex-string'
import { EthereumAddress } from './ethereum-address'
import { PositiveIntegerString } from './positive-integer-string'
import { NonEmptyString } from './non-empty-string'
import { HttpUrlString } from './url-strings'
import { NetworkName } from './config'
import { PositiveInteger } from './positive-integer'

export const Balance = z.object({
  owner: z.object({ address: EthereumAddress }),
  holder: z.object({ address: EthereumAddress }),
  balance: PositiveIntegerString,
})
export type Balance = z.infer<typeof Balance>

export const Transfer = z.object({
  operator: EthereumAddress,
  from: z.object({ address: EthereumAddress }).nullable(),
  to: z.object({ address: EthereumAddress }).nullable(),
  value: PositiveIntegerString,
  blockNumber: PositiveIntegerString,
  blockTimestamp: PositiveIntegerString,
  transactionHash: PrefixedHexString,
})
export type Transfer = z.infer<typeof Transfer>

export const TraitBase = z.object({
  key: NonEmptyString,
  displayName: NonEmptyString,
})
export const TraitString = TraitBase.extend({
  value: NonEmptyString.nullable(),
})
export const TraitDecimal = TraitBase.extend({
  value: z.number().nullable(),
})
export const TraitBoolean = TraitBase.extend({
  value: z.boolean().nullable(),
})

export const FabricaTokenSubgraph = z.object({
  tokenId: PositiveIntegerString,
  supply: PositiveIntegerString,
  operatingAgreement: z.string(),
  definition: z.string(),
  configuration: z.string(),
  validator: z.string(),
  mintTimestamp: PositiveIntegerString,
  uri: z.union([z.literal(''), HttpUrlString]),
  balances: z.array(Balance),
  transfers: z.array(Transfer),
  stringTraits: z.array(TraitString),
})

export const GraphResultMeta = z.object({
  block: z.object({ number: PositiveInteger }),
})
export type GraphResultMeta = z.infer<typeof GraphResultMeta>

export const FabricaTokensSubgraphResult = z.object({
  data: z.object({
    tokens: z.array(FabricaTokenSubgraph),
    meta: GraphResultMeta,
  }),
})
export type FabricaTokensSubgraphResult = z.infer<
  typeof FabricaTokensSubgraphResult
>

export const FabricaToken = FabricaTokenSubgraph.extend({
  network: z.nativeEnum(NetworkName),
  contractAddress: EthereumAddress,
})
export type FabricaToken = z.infer<typeof FabricaToken>
