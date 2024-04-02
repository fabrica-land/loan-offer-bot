import { z } from 'zod'

import { EthereumAddress } from './ethereum-address'
import { NonEmptyString } from './non-empty-string'

export const Currency = z.object({
  address: EthereumAddress,
  symbol: NonEmptyString,
  scale: z.number().int().positive(),
})
export type Currency = z.infer<typeof Currency>

export const AddressToCurrency = z.record(Currency)
export type AddressToCurrency = z.infer<typeof AddressToCurrency>
