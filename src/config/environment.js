/* eslint-disable no-console */
import loadEnv from 'node-env-file'
import { ENV_FILE } from 'config/paths'

loadEnv(ENV_FILE, { raise: false })

debug.enable(process.env.DEBUG)
debug.log = console.info.bind(console)

const log = debug('environment')

log({
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
})

log('Applying defaults')

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development'
}

if (!process.env.PORT) {
  process.env.PORT = 9001
}

log({
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
})
/* eslint-enable no-console */
