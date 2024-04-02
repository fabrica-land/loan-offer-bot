import { z } from "zod";
import { AlchemyNetworkConfig } from './alchemy.network.config'
import { NftfiNetworkConfig } from './nftfi.network.config'
import { FabricaNetworkConfig } from './fabrica.network.config'
import { NetworkName } from './config'

export const NetworkConfig = z.object({
  alchemy: AlchemyNetworkConfig,
  fabrica: FabricaNetworkConfig,
  nftfi: NftfiNetworkConfig,
})
export type NetworkConfig = z.infer<typeof NetworkConfig>
