import { z } from 'zod'

import { SerializableLiteral } from './serializable'

export const HttpUrlString = z.union([
  z.string().url().startsWith('http://'),
  z.string().url().startsWith('https://'),
])
export type HttpUrlString = z.infer<typeof HttpUrlString>

export const WebsocketUrlString = z.union([
  z.string().url().startsWith('ws://'),
  z.string().url().startsWith('wss://'),
])
export type WebsocketUrlString = z.infer<typeof WebsocketUrlString>

export const buildUrl = (
  baseUrl: HttpUrlString | WebsocketUrlString,
  path = '',
  queryParams?:
    | { [key: string]: SerializableLiteral }
    | Array<[string, SerializableLiteral]>
    | undefined,
): HttpUrlString => {
  const queryParamsAsArrayOfArrays = Array.isArray(queryParams)
    ? queryParams
    : queryParams &&
      Object.entries(queryParams).reduce(
        (soFar, [key, value]) => [...soFar, [key, value]],
        [],
      )
  const queryParamsAsArrayOfStringToString:
    | Array<[string, string]>
    | undefined =
    queryParamsAsArrayOfArrays &&
    queryParamsAsArrayOfArrays.map((item) => [String(item[0]), String(item[1])])
  const url = new URL(path, baseUrl)
  if (queryParamsAsArrayOfArrays) {
    url.search = new URLSearchParams(
      queryParamsAsArrayOfStringToString,
    ).toString()
  }
  return url.toString()
}
