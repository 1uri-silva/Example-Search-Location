import { resolve } from 'path'
import {config} from 'dotenv'

config()
export default {
  name: 'default',
  type: process.env.DRIVER,
  host: process.env.HOST,
  port: process.env.PORT,
  username: process.env.USERNAME,
  password: process.env.PASS,
  database: process.env.DB,
  cli: {
    migrationsDir: resolve(__dirname, 'src', 'shared', 'infra', 'typeorm', 'database')
  },
  entities: [
     resolve(__dirname, 'src', 'modules', '**', 'infra', 'typeorm', 'models', '*ts')
  ],
  migrations: [
    resolve(__dirname, 'src', 'shared', 'infra', 'typeorm', 'database', '*ts')

  ]
}