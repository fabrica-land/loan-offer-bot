import { StatusCodes } from 'http-status-codes'
import stringify from 'json-stringify-safe'

import { asErrorLike, ErrorLike } from './types/error-like'
import { ErrorWithCause } from './types/error-with-cause'

const DEFAULT_TIMEOUT_MILLIS = 60_000

export enum FetchResponseType {
  ArrayBuffer,
  Blob,
  FormData,
  Json,
  Stream,
  Text,
}

export class FetchError extends ErrorWithCause {
  constructor(
    message: string,
    public readonly requestUrl: string,
    public readonly status: number,
    public readonly statusText: string,
    public readonly responseBody: unknown,
    cause?: ErrorLike,
  ) {
    super(message, cause)
  }
}

export const fetchOrThrow = async (
  url: string,
  options?: Parameters<typeof fetch>[1],
  responseType = FetchResponseType.Json,
  timeoutMillis = DEFAULT_TIMEOUT_MILLIS,
): Promise<unknown> => {
  let response: Response
  const abortController = new AbortController()
  const timeout = setTimeout(
    () => abortController.abort(new Error('Fetch timed out')),
    timeoutMillis,
  )
  try {
    response = await fetch(url, {
      signal: abortController.signal,
      ...options,
    })
  } catch (error) {
    const statusText =
      error instanceof Error
        ? error.message
        : typeof error === 'string'
          ? error
          : 'Network Error'
    const message = `Error during fetch request: ${statusText}`
    console.warn(
      message,
      {
        error,
        status: 0,
        statusText,
        responseBody: undefined,
      },
    )
    throw new FetchError(message, url, 0, statusText, undefined, asErrorLike(error))
  } finally {
    clearTimeout(timeout)
  }
  let responseBody: unknown
  try {
    responseBody = await (responseType === FetchResponseType.Stream
      ? response.body
      : responseType === FetchResponseType.Json
        ? response.json()
        : responseType === FetchResponseType.ArrayBuffer
          ? response.arrayBuffer()
          : responseType === FetchResponseType.Blob
            ? response.blob()
            : responseType === FetchResponseType.FormData
              ? response.formData()
              : response.text())
  } catch (err) {
    console.warn(
      'Error processing result of fetch request',
      { err, options, url, responseType, response, body: response.body },
    )
    const error = asErrorLike(err)
    throw new FetchError(
      error.message,
      url,
      response.status,
      response.statusText,
      response.body,
      error,
    )
  }
  if (
    response.status < StatusCodes.OK ||
    response.status >= StatusCodes.MULTIPLE_CHOICES
  ) {
    const message = `Error response from fetch request: status ${
      response.status
    }:\n${stringify(responseBody)}.`
    console.warn(
      message,
      {
        status: response.status,
        statusText: response.statusText,
        responseBody,
        url,
      },
    )
    throw new FetchError(
      message,
      url,
      response.status,
      response.statusText,
      responseBody,
    )
  }
  return responseBody
}
