import { z } from 'zod'

export const PositiveInteger = z.number().int().positive()
export type PositiveInteger = z.infer<typeof PositiveInteger>
