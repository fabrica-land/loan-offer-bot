import { z } from 'zod'

import { CronExpression } from './cron-expression'
import { EthereumAddress } from './ethereum-address'
import { PositiveFloatString } from './float'
import { HexString } from './hex-string'
import { NonEmptyString } from './non-empty-string'
import { PositiveInteger } from './positive-integer'

export const LendingNetworkConfig = z.object({
  enabled: z.boolean(),
  lendingWalletAddress: EthereumAddress,
  lendingWalletPrivateKey: HexString,
  offerRules: z.array(
    z.object({
      filter: NonEmptyString.optional(),
      loanPrincipal: NonEmptyString,
      loanApr: PositiveFloatString,
      loanDurationDays: PositiveInteger,
      offerExpirationDays: PositiveInteger,
      percentChanceToLend: PositiveInteger.min(1).max(100).optional(),
    }),
  ),
  periodicity: CronExpression,
})
export type LendingNetworkConfig = z.infer<typeof LendingNetworkConfig>
