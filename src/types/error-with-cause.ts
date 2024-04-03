import { asErrorLike, ErrorLike } from './error-like'

export class ErrorWithCause extends Error {
  cause?: ErrorLike

  constructor(message: string, cause?: unknown) {
    super(message)
    this.cause = cause ? asErrorLike(cause) : undefined
  }
}
