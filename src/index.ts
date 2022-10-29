import 'dotenv/config'

import fs from 'fs'

import express, { Application } from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'

import environments from './settings/env.variables'
import connectMongo from './settings/database'
import strategy from './middlewares/passport'
import passport from 'passport'
import v1 from './apis/v1'
import getLogFileName from './utils/getLogFileName'

const app: Application = express()

// middlewares
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

if (!fs.existsSync('./logs')) {
  fs.mkdirSync('./logs', { recursive: true })
}

app.use(morgan('combined', {
  stream: fs.createWriteStream(getLogFileName(), { flags: 'a' })
}))

app.use(passport.initialize())

passport.use(strategy)

// routes
app.use('/api/v1', v1)

// settings
const server = app.listen(environments.PORT, () => {
  connectMongo(environments.MONGO_URI)
    .then(() => {
      console.log(`\nServer is running in http://localhost:${environments.PORT}`)
    })
})

export { server, app }
