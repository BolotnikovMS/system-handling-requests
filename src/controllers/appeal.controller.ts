import { Request, Response } from "express";
import { appealRepository } from "../repository";

export class AppealsController {
	static async getAppeals(req: Request, res: Response) {
		try {
			const appeals = await appealRepository.getAppeals(req)

			res.status(200).json(appeals)
		} catch (error) {
			res.status(500).json( {message: 'Неизвестная ошибка!' })
		}
	}

	static async createAppeal(req: Request, res: Response) {
		try {
			const data = await appealRepository.createAppeal(req.body)

			res.status(201).json(data)
		} catch (error) {
			res.status(500).json( {message: 'Неизвестная ошибка!' })
		}
	}

	static async changeStatusAppeal(req: Request, res: Response) {
		try {
			const { id } = req.params
			let data: unknown

			if (req.path.includes('/take-work')) {
				data = await appealRepository.changeStatus(+id)
			} else if (req.path.includes('/close')) {
				data = await appealRepository.closeAppeal(+id, req.body)
			} else if (req.path.includes('/cancel')) {
				data = await appealRepository.cancelAppeal(+id, req.body)
			}

			res.status(200).json(data)
		} catch (error) {
			if (error instanceof Error) {
				res.status(404).json({ message: error.message })
			} else {
				res.status(500).json({ message: 'Неизвестная ошибка' })
			}
		}
	}

	static async cancelAllAppeal(req: Request, res: Response) {
		try {
			await appealRepository.cancelAllAppeal()

			res.status(200).json({ message: 'Статус всех обращений со статусом "В работе" изменен!' })
		} catch (error) {
			res.status(500).json( {message: 'Неизвестная ошибка!' })
		}
	}

	static async deleteAppeal(req: Request, res: Response) {
		try {
			const { id } = req.params

			await appealRepository.deleteAppeal(+id)

			res.status(204).json()
		} catch (error) {
			if (error instanceof Error) {
				res.status(404).json({ message: error.message })
			} else {
				res.status(500).json({ message: 'Неизвестная ошибка' })
			}
		}
	}
}
