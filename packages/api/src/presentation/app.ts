import cors from 'cors'
import * as dotenv from 'dotenv'
import express from 'express'
import path from 'path'

import 'express-async-errors'

import errorHandler from './errors/handler'
import router from './routes'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(router)
app.use(errorHandler)

export { app }
