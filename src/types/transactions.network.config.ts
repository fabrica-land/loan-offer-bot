import { z } from 'zod'

export const TransactionsNetworkConfig = z.object({
  gasLimit: z.number().int().nonnegative(),
  maxFeePerGasInGwei: z.number().int().nonnegative(),
  maxPriorityFeePerGasInGwei: z.number().int().nonnegative(),
  maxWriteTransactionsPerBlock: z.number().int().nonnegative(),
  privateTransact: z.boolean(),
})
export type TransactionsNetworkConfig = z.infer<typeof TransactionsNetworkConfig>
