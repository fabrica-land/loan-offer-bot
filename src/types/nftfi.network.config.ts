import { z } from 'zod'
import { HttpUrlString } from './url-strings'
import { NonEmptyString } from './non-empty-string'
import { EthereumAddress } from './ethereum-address'
import { HexString, PrefixedHexString } from './hex-string'

export const NftfiNetworkConfig = z.object({
  enabled: z.boolean(),
  apiBaseUri: HttpUrlString.optional(),
  apiKey: NonEmptyString,
  website: HttpUrlString.optional(),
  lendingWalletAddress: EthereumAddress,
  lendingWalletPrivateKey: HexString,
  loanContractAddress: EthereumAddress,
  loanStartedTopic: PrefixedHexString,
  loans: z.object({
    enabled: z.boolean(),
    aprMax: z.number().nonnegative(),
    aprMin: z.number().nonnegative(),
    durationDaysMax: z.number().int().positive(),
    durationDaysMin: z.number().int().positive(),
    offerExpirationDays: z.number().int().positive(),
    principalScale: z.number().positive(),
  }),
})
export type NftfiNetworkConfig = z.infer<typeof NftfiNetworkConfig>
