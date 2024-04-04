import { Network as AlchemyNetwork } from 'alchemy-sdk'
import { z } from "zod"
import { NonEmptyString } from "./non-empty-string"
import { AddressToCurrency } from "./currency"

export const AlchemyNetworkConfig = z.object({
  apiKey: NonEmptyString,

  networkName: z.nativeEnum(AlchemyNetwork),
})
export type AlchemyNetworkConfig = z.infer<typeof AlchemyNetworkConfig>
