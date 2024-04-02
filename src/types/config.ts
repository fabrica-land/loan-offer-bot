import SecureJson from 'secure-json-parse'
import * as fs from 'node:fs'
import * as asyncFs from 'node:fs/promises'
import { z } from 'zod'
import { NetworkConfig } from './network.config'
import { SerializableObject } from './serializable'
import { NonEmptyString } from './non-empty-string'
import process from 'process'
import path from 'node:path'
import os from 'node:os'
import merge from 'lodash.merge'

export const DEVELOP_ENV = 'develop'

export enum NetworkName {
  Ethereum = 'ethereum',
  Sepolia = 'sepolia',
}

export const Networks = z.object({
  [NetworkName.Ethereum]: NetworkConfig,
  [NetworkName.Sepolia]: NetworkConfig,
})
export type Networks = z.infer<typeof Networks>

export const Config = z.object({
  networks: Networks,
  nodeEnv: NonEmptyString,
})
export type Config = z.infer<typeof Config>

export const loadFile = async (fileName: NonEmptyString, required = false): Promise<SerializableObject> => {
  let fullPath = path.resolve(__dirname, '..', '..', 'config', fileName)
  if (!fs.existsSync(fullPath)) {
    fullPath = path.resolve(__dirname, '..', '..', fileName)
    if (!fs.existsSync(fullPath)) {
      if (required) {
        throw new Error(`Required configuration file not found: ${fileName}`)
      } else {
        return {}
      }
    }
  }
  try {
    const content = await asyncFs.readFile(fullPath, { encoding: 'utf-8' })
    const json = SecureJson.parse(content)
    return SerializableObject.parse(json)
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error reading file', { fileName, fullPath, err })
    if (required) {
      throw new Error(`Error reading required file ${fileName}`)
    } else {
      return {}
    }
  }
}

export const getConfig = async (): Promise<Config> => {
  const localEnvConfig: Partial<Config> = {
    nodeEnv: process.env.NODE_ENV || `local:{${os.hostname()}}`,
  }
  const nodeEnv = process.env.NODE_ENV || DEVELOP_ENV
  const nodeEnvConfig = await loadFile(`${nodeEnv}.config.json`, true)
  const nodeEnvSecrets = await loadFile(`${nodeEnv}.secrets.json`, true)
  const localConfig = await loadFile('local.config.json', nodeEnv === DEVELOP_ENV)
  const localSecrets = await loadFile('local.secrets.json', nodeEnv === DEVELOP_ENV)
  const config = merge(
    {},
    localEnvConfig,
    nodeEnvConfig,
    nodeEnvSecrets,
    localConfig,
    localSecrets,
  )
  return Config.parse(config)
}
