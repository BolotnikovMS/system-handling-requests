import express, { Application } from 'express'
import "reflect-metadata"
import { DataBaseConnect } from './config/database'
import appealsRouter from './routes/appeals.route'

DataBaseConnect.initialize()
	.then(async() => {
		const app: Application = express()
		const PORT = process.env.PORT || 6000

		app.use(express.json())
		app.use('/api/v1/', [appealsRouter])

		app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))
  })
  .catch((error: Error) => {console.log(error)})
