import { ContractIdentity } from './contract-identity'
import { z } from 'zod'
import { PositiveIntegerString } from './positive-integer-string'

export const TokenIdentity = ContractIdentity.extend({
  tokenId: PositiveIntegerString,
})
export type TokenIdentity = z.infer<typeof TokenIdentity>
