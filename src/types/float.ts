import { z } from 'zod'
import { NonEmptyString } from './non-empty-string'

export const PositiveFloat = z.number().positive()
export type PositiveFloat = z.infer<typeof PositiveFloat>

export const PATTERN_POSITIVE_FLOAT_STRING = /^[0-9]+\.[0-9]+$/

export const PositiveFloatString = z
  .string()
  .regex(
    PATTERN_POSITIVE_FLOAT_STRING,
    `Must be a string containing a non-negative floating-point value, matching the RegEx pattern ${PATTERN_POSITIVE_FLOAT_STRING}`,
  )
export type PositiveFloatString = z.infer<typeof PositiveFloatString>

export const FloatString = NonEmptyString.refine((asString) => {
  const asNumber = parseFloat(asString)
  return !Number.isNaN(asNumber)
})
export type FloatString = z.infer<typeof FloatString>
