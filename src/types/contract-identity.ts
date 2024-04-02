import { EthereumAddress } from './ethereum-address'
import { NetworkName } from './config'
import { z } from 'zod'

export const ContractIdentity = z.object({
  network: z.nativeEnum(NetworkName),
  contractAddress: EthereumAddress,
})
export type ContractIdentity = z.infer<typeof ContractIdentity>
