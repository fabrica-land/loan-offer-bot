import { z } from 'zod'
import { EthereumAddress } from './ethereum-address'
import { NonEmptyString } from './non-empty-string'
import { PositiveFloatString } from './float'
import { PositiveInteger } from './positive-integer'
import { HexString } from './hex-string'

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
    })
  ),
})
export type LendingNetworkConfig = z.infer<typeof LendingNetworkConfig>
