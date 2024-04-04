import { z } from 'zod'
import { HttpUrlString } from './url-strings'
import { NonEmptyString } from './non-empty-string'
import { EthereumAddress } from './ethereum-address'
import { HexString, PrefixedHexString } from './hex-string'

export const NftfiNetworkConfig = z.object({
  apiBaseUri: HttpUrlString.optional(),
  apiKey: NonEmptyString,
  loanContractAddress: EthereumAddress,
  website: HttpUrlString.optional(),
})
export type NftfiNetworkConfig = z.infer<typeof NftfiNetworkConfig>
