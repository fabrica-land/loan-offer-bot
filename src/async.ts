import * as parallel from 'async-parallel'
import { Readable } from 'node:stream'
import { isPlainObject } from './types/plain-object'

export const asyncSleep = parallel.sleep

export const asyncMapSerial = async <CollectionItemType, TargetType>(
  collection: Readonly<Array<CollectionItemType>>,
  action: (
    value: CollectionItemType,
    index: number,
    list: Array<CollectionItemType>,
  ) => Promise<TargetType>,
): Promise<Array<TargetType>> => asyncMapParallel(collection, 1, action)

export const asyncMapParallel = async <CollectionItemType, TargetType>(
  collection: Readonly<Array<CollectionItemType>>,
  concurrency: number,
  action: (
    value: CollectionItemType,
    index: number,
    list: Array<CollectionItemType>,
  ) => Promise<TargetType>,
): Promise<Array<TargetType>> => {
  try {
    return await parallel.map<CollectionItemType, TargetType>(
      [...collection],
      action,
      { concurrency },
    )
  } catch (err) {
    throw firstError(err)
  }
}

export const asyncEachSerial = <CollectionItemType>(
  collection: Readonly<Array<CollectionItemType>>,
  action: (value: CollectionItemType) => Promise<void>,
): Promise<void> => asyncEachParallel(collection, 1, action)

export const asyncEachParallel = async <CollectionItemType>(
  collection: Readonly<Array<CollectionItemType>>,
  concurrency: number,
  action: (value: CollectionItemType) => Promise<void>,
): Promise<void> => {
  try {
    await parallel.each([...collection], action, { concurrency })
  } catch (err) {
    throw firstError(err)
  }
}

export const asyncReduceSerial = <CollectionItemType, AccumulatedType>(
  collection: Readonly<Array<CollectionItemType>>,
  action: (
    accumulator: AccumulatedType,
    value: CollectionItemType,
    index: number,
    list: CollectionItemType[],
  ) => Promise<AccumulatedType>,
  value: AccumulatedType,
): Promise<AccumulatedType> => asyncReduceParallel(collection, 1, action, value)

export const asyncReduceParallel = async <CollectionItemType, AccumulatedType>(
  collection: Readonly<Array<CollectionItemType>>,
  concurrency: number,
  action: (
    accumulator: AccumulatedType,
    value: CollectionItemType,
    index: number,
    list: CollectionItemType[],
  ) => Promise<AccumulatedType>,
  value: AccumulatedType,
): Promise<AccumulatedType> => {
  try {
    return await parallel.reduce([...collection], action, value, {
      concurrency,
    })
  } catch (err) {
    throw firstError(err)
  }
}

export const asyncEverySerial = async <CollectionItemType>(
  collection: Readonly<Array<CollectionItemType>>,
  action: (
    value: CollectionItemType,
    index: number,
    list: Array<CollectionItemType>,
  ) => Promise<boolean>,
): Promise<boolean> => asyncEveryParallel(collection, 1, action)

export const asyncEveryParallel = async <CollectionItemType>(
  collection: Readonly<Array<CollectionItemType>>,
  concurrency: number,
  action: (
    value: CollectionItemType,
    index: number,
    list: Array<CollectionItemType>,
  ) => Promise<boolean>,
): Promise<boolean> => {
  try {
    // async-parallel#every has an infinite-loop bug. This is less efficient,
    //  but at least doesn't lock up the worker process!
    const filtered = await parallel.filter<CollectionItemType>(
      [...collection],
      action,
      { concurrency },
    )
    return filtered.length === collection.length
  } catch (err) {
    throw firstError(err)
  }
}

export const asyncFilterSerial = async <CollectionItemType>(
  collection: Readonly<Array<CollectionItemType>>,
  action: (
    value: CollectionItemType,
    index: number,
    list: Array<CollectionItemType>,
  ) => Promise<boolean>,
): Promise<Array<CollectionItemType>> =>
  asyncFilterParallel(collection, 1, action)

export const asyncFilterParallel = async <CollectionItemType>(
  collection: Readonly<Array<CollectionItemType>>,
  concurrency: number,
  action: (
    value: CollectionItemType,
    index: number,
    list: Array<CollectionItemType>,
  ) => Promise<boolean>,
): Promise<Array<CollectionItemType>> => {
  try {
    return await parallel.filter<CollectionItemType>([...collection], action, {
      concurrency,
    })
  } catch (err) {
    throw firstError(err)
  }
}

export const arrayFromAsync = async <ItemType>(
  generator: AsyncGenerator<ItemType>,
): Promise<Array<ItemType>> => {
  const arr: Array<ItemType> = []
  for await (const item of generator) {
    arr.push(item)
  }
  return arr
}

export const readableStreamToBuffer = async (
  stream: Readable,
): Promise<Buffer> => {
  const buffer = []
  // node.js readable streams implement the async iterator protocol
  for await (const data of stream) {
    buffer.push(data)
  }
  return Buffer.concat(buffer)
}

const firstError = (err: unknown): unknown =>
  isPlainObject(err) && Array.isArray(err.list) ? firstError(err.list[0]) : err
