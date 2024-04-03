export type PlainObject = { [member: string]: unknown }

export const isPlainObject = (value: unknown): value is PlainObject =>
  value != null && typeof value === 'object' && !Array.isArray(value)
