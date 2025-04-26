import { Request, Response, Router } from 'express'
import { statusController } from '../controllers/statusController'

const router = Router()

// Home route
router.get('/', (req: Request, res: Response) => {
  res.status(200).json('Hello, system handling requests!')
})

// Statuses routes
router.get('/statuses', statusController.getStatuses)
router.post('statuses', statusController.createStatus)
router.put('statuses/:id', statusController.updateStatus)
router.delete('statuses/:id', statusController.deleteStatus)

// Appeals routes
router.get('/appeals', (req: Request, res: Response) => {
	res.status(200).json('All appeals')
})

export default router
