import { z } from 'zod'

import { NetworkName } from './config'
import { EthereumAddress } from './ethereum-address'

export const ContractIdentity = z.object({
  network: z.nativeEnum(NetworkName),
  contractAddress: EthereumAddress,
})
export type ContractIdentity = z.infer<typeof ContractIdentity>
