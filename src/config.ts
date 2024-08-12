import merge from 'lodash.merge'
import * as fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import process from 'process'
import SecureJson from 'secure-json-parse'

import { Config } from './types/config'
import { NonEmptyString } from './types/non-empty-string'
import { SerializableObject } from './types/serializable'

export const DEVELOP_ENV = 'develop'

export const loadFile = (
  fileName: NonEmptyString,
  required = false,
): SerializableObject => {
  let fullPath = path.resolve(__dirname, '..', 'config', fileName)
  if (!fs.existsSync(fullPath)) {
    fullPath = path.resolve(__dirname, '..', fileName)
    if (!fs.existsSync(fullPath)) {
      if (required) {
        throw new Error(`Required configuration file not found: ${fileName}`)
      } else {
        return {}
      }
    }
  }
  try {
    const content = fs.readFileSync(fullPath, { encoding: 'utf-8' })
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

export const getConfig = (): Config => {
  const localEnvConfig: Partial<Config> = {
    nodeEnv: process.env.NODE_ENV || `local:{${os.hostname()}}`,
  }
  const nodeEnv = process.env.NODE_ENV || DEVELOP_ENV
  const nodeEnvConfig = loadFile(`${nodeEnv}.config.json`, true)
  const nodeEnvSecrets = loadFile(`${nodeEnv}.secrets.json`, true)
  const localConfig = loadFile('local.config.json', nodeEnv === DEVELOP_ENV)
  const localSecrets = loadFile('local.secrets.json', nodeEnv === DEVELOP_ENV)
  const config = merge(
    {},
    localEnvConfig,
    nodeEnvConfig,
    nodeEnvSecrets,
    localConfig,
    localSecrets,
  )
  // return Config.parse(config)
  return config as Config
}
