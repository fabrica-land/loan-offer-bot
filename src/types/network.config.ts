import { z } from 'zod'
import { AlchemyNetworkConfig } from './alchemy.network.config'
import { NetworkName } from './config'
import { FabricaNetworkConfig } from './fabrica.network.config'
import { NftfiNetworkConfig } from './nftfi.network.config'
import { LendingNetworkConfig } from './lending.network.config'
import { TransactionsNetworkConfig } from './transactions.network.config'

export const NetworkConfig = z.object({
  name: z.nativeEnum(NetworkName),
  chainId: z.number().int().positive(),
  alchemy: AlchemyNetworkConfig,
  fabrica: FabricaNetworkConfig,
  lending: LendingNetworkConfig,
  nftfi: NftfiNetworkConfig,
  transactions: TransactionsNetworkConfig,
})
export type NetworkConfig = z.infer<typeof NetworkConfig>
