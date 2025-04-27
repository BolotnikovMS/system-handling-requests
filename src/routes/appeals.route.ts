import { Router } from "express"
import { AppealsController } from "../controllers/appeal.controller"

const appealsRouter = Router()

appealsRouter.get('/appeals', AppealsController.getAppeals)
appealsRouter.post('/appeals', AppealsController.createAppeal)
appealsRouter.patch('/appeals/:id/take-work', AppealsController.changeStatusAppeal)
appealsRouter.patch('/appeals/:id/close', AppealsController.changeStatusAppeal)
appealsRouter.patch('/appeals/:id/cancel', AppealsController.changeStatusAppeal)
appealsRouter.patch('/appeals/cancel-all', AppealsController.cancelAllAppeal)
appealsRouter.delete('/appeals/:id', AppealsController.deleteAppeal)

export default appealsRouter
