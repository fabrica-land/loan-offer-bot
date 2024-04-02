import { z } from 'zod'

export const PATTERN_POSITIVE_INTEGER_STRING = /^[0-9]+$/
export const PositiveIntegerString = z
  .string()
  .regex(
    PATTERN_POSITIVE_INTEGER_STRING,
    `Must be a non-negative integer string, matching the RegEx pattern ${PATTERN_POSITIVE_INTEGER_STRING}`,
  )
export type PositiveIntegerString = z.infer<typeof PositiveIntegerString>
