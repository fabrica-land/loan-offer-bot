import { z } from 'zod'

export const SerializableLiteral = z.union([
  z.string(),
  z.boolean(),
  z.number().finite(),
  z.null(),
])
export type SerializableLiteral = string | boolean | number | null

export type SerializableValue =
  | SerializableLiteral
  | { [key: string]: SerializableValue }
  | Array<SerializableValue>

export const SerializableValue: z.ZodType<SerializableValue> = z.lazy(() =>
  z.union([
    SerializableLiteral,
    z.array(SerializableValue),
    z.record(SerializableValue),
  ]),
)

export const SerializableArray = z.array(SerializableValue)
export type SerializableArray = z.infer<typeof SerializableArray>

export const SerializableObject = z.record(SerializableValue)
export type SerializableObject = z.infer<typeof SerializableObject>
