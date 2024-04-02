import { z } from 'zod'

export const PATTERN_HEX_STRING = /^[a-fA-F0-9]+$/
export const HexString = z
  .string()
  .regex(
    PATTERN_HEX_STRING,
    `Must be a valid hexadecimal-number string without the 0x prefix, matching the RegEx pattern ${PATTERN_HEX_STRING}`,
  )
export type HexString = z.infer<typeof HexString>

export const PATTERN_PREFIXED_HEX_STRING = /^0x[a-fA-F0-9]+$/
export const PrefixedHexString = z
  .string()
  .regex(
    PATTERN_PREFIXED_HEX_STRING,
    `Must be a valid 0x-prefixed hexadecimal-number string, matching the RegEx pattern ${PATTERN_PREFIXED_HEX_STRING}`,
  )
export type PrefixedHexString = z.infer<typeof PrefixedHexString>
