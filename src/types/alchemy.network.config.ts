import { Network as AlchemyNetwork } from 'alchemy-sdk'
import { z } from "zod"
import { NonEmptyString } from "./non-empty-string"
import { AddressToCurrency } from "./currency"

export const AlchemyNetworkConfig = z.object({
  apiKey: NonEmptyString,
  chainId: z.number().int().positive(),
  currencies: AddressToCurrency,
  gasLimit: z.number().int().nonnegative(),
  maxFeePerGasInGwei: z.number().int().nonnegative(),
  maxPriorityFeePerGasInGwei: z.number().int().nonnegative(),
  maxWriteTransactionsPerBlock: z.number().int().nonnegative(),
  networkName: z.nativeEnum(AlchemyNetwork),
  privateTransact: z.boolean(),
})
export type AlchemyNetworkConfig = z.infer<typeof AlchemyNetworkConfig>
