import { z } from 'zod'

export const LoggingNetworkConfig = z.object({
  verbose: z.boolean(),
})
export type LoggingNetworkConfig = z.infer<typeof LoggingNetworkConfig>
