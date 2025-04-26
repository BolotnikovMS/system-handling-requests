import { Request, Response } from 'express'

export const statusController = {
	getStatuses(req: Request, res: Response) {
		res.status(200).json('All statuses')
	},

	createStatus(req: Request, res: Response) {},

	updateStatus(req: Request, res: Response) {},

	deleteStatus(req: Request, res: Response) {}
}
