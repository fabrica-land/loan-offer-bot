import { z } from "zod";
import { AlchemyNetworkConfig } from './alchemy.network.config'
import { FabricaNetworkConfig } from './fabrica.network.config'
import { NftfiNetworkConfig } from './nftfi.network.config'
import { LendingNetworkConfig } from './lending.network.config'
import { TransactionsNetworkConfig } from './transactions.network.config'
import { AddressToCurrency } from './currency'
import { NonEmptyString } from './non-empty-string'

export const NetworkConfig = z.object({
  name: NonEmptyString,
  chainId: z.number().int().positive(),
  alchemy: AlchemyNetworkConfig,
  currencies: AddressToCurrency,
  fabrica: FabricaNetworkConfig,
  lending: LendingNetworkConfig,
  nftfi: NftfiNetworkConfig,
  transactions: TransactionsNetworkConfig,
})
export type NetworkConfig = z.infer<typeof NetworkConfig>
