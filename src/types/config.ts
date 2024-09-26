import { z } from 'zod'

import { NetworkConfig } from './network.config'
import { NonEmptyString } from './non-empty-string'
import { HttpUrlString } from './url-strings'

export enum NetworkName {
  Ethereum = 'ethereum',
  Sepolia = 'sepolia',
}

export const Networks = z.object({
  [NetworkName.Ethereum]: NetworkConfig,
  [NetworkName.Sepolia]: NetworkConfig,
})
export type Networks = z.infer<typeof Networks>
export const Config = z.object({
  apiBaseUrl: HttpUrlString,
  apiBearerToken: NonEmptyString.min(32),
  lendOnPremints: z.boolean(),
  lendOnTokenMint: z.boolean(),
  metadataBaseUrl: HttpUrlString,
  networks: Networks,
  nodeEnv: NonEmptyString,
})
export type Config = z.infer<typeof Config>
