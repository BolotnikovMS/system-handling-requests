import express, { Application, NextFunction, Request, Response } from 'express'
import router from './routes'

const app: Application = express()
const PORT = process.env.PORT || 6000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack)

  res.status(500).send('Something broke!')
})

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))
