import { isPlainObject } from './plain-object'

import { NonEmptyString } from './non-empty-string'

export interface ErrorLike {
  cause?: ErrorLike
  code?: string
  message: string
  name?: string
  signal?: string
  stack?: string
}

export const isErrorLike = (err: unknown): err is ErrorLike => {
  if (!isPlainObject(err)) {
    return false
  }
  return (
    (err.cause === undefined || isErrorLike(err.cause)) &&
    (err.code === undefined || typeof err.code === 'string') &&
    typeof err.message === 'string' &&
    (err.name === undefined || typeof err.name === 'string') &&
    (err.signal === undefined || typeof err.signal === 'string') &&
    (err.stack === undefined || typeof err.stack === 'string')
  )
}

export const asErrorLike = (value: unknown): ErrorLike =>
  isErrorLike(value)
    ? value
    : isPlainObject(value) && NonEmptyString.safeParse(value.message).success
    ? (new Error(NonEmptyString.parse(value.message)) as ErrorLike)
    : (new Error(String(value)) as ErrorLike)
