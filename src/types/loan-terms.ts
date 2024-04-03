import { z } from 'zod'
import { PositiveIntegerString } from './positive-integer-string'
import { PositiveInteger } from './positive-integer'
import { EthereumAddress } from './ethereum-address'

export const LoanTerms = z.object({
  principal: PositiveIntegerString,
  repayment: PositiveIntegerString,
  duration: PositiveInteger,
  currency: EthereumAddress,
  expiry: PositiveInteger,
})
export type LoanTerms = z.infer<typeof LoanTerms>
