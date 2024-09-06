import { z } from 'zod'

import { EthereumAddress } from './ethereum-address'
import { NonEmptyString } from './non-empty-string'
import { HttpUrlString } from './url-strings'

export const NftfiNetworkConfig = z.object({
  apiBaseUri: HttpUrlString.optional(),
  apiKey: NonEmptyString,
  bnplContractAddress: EthereumAddress,
  defaultLoanContractName: NonEmptyString,
  website: HttpUrlString.optional(),
})
export type NftfiNetworkConfig = z.infer<typeof NftfiNetworkConfig>
