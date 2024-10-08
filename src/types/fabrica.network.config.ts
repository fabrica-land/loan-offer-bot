import { z } from 'zod'

import { EthereumAddress } from './ethereum-address'

export const FabricaNetworkConfig = z.object({
  tokenContractAddress: EthereumAddress,
})
export type FabricaNetworkConfig = z.infer<typeof FabricaNetworkConfig>
