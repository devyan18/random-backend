import 'dotenv/config'

import express, { Application } from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'

import environments from './settings/env.variables'
import connectMongo from './settings/database'
import strategy from './middlewares/passport'
import passport from 'passport'
import v1 from './routes'

const app: Application = express()

// middlewares
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
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
