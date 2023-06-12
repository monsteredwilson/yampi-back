import express, {Application} from 'express'
import cors from 'cors'
import { handleErrors } from './errors'
import { userRouter } from './routes/users.routes'

const app: Application = express()
app.use(express.json())
app.use(cors())
app.use('/user', userRouter)
app.use(handleErrors)

export default app