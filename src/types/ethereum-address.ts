import { z } from 'zod'

export const PATTERN_ETHEREUM_ADDRESS = /^0x[a-fA-F0-9]{40}$/

export const EthereumAddress = z
  .string()
  .regex(
    PATTERN_ETHEREUM_ADDRESS,
    `Must be a valid Ethereum address, matching the RegEx pattern ${PATTERN_ETHEREUM_ADDRESS}`,
  )
export type EthereumAddress = z.infer<typeof EthereumAddress>
