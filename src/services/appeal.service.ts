import { Request } from "express"
import { Repository } from "typeorm"
import { Appeal } from "../entity/appeal.entity"
import { ICancelAppeal, ICloseAppeal, INewAppeal } from "../interfaces/appeal.interfaces"

export class AppealService {
	constructor(private readonly appealRepository: Repository<Appeal>) {}

	async getAppeals(req: Request): Promise<Appeal[]> {
		const { date, dateStart, dateEnd } = req.query
		// console.log('Date', date)
		// console.log('DateStart', dateStart)
		// console.log('DateEnd', dateEnd)
		const appeals = await this.appealRepository.find()

		return appeals
	}

	async getAppealById(appealId: number): Promise<Appeal> {
		const appeal = await this.appealRepository.findOneOrFail({
			where: {
				id: appealId
			}
		})

		return appeal
	}

	async createAppeal(newAppeal: INewAppeal): Promise<Appeal> {
		const appeal = this.appealRepository.create(newAppeal)

		await this.appealRepository.save(appeal)

		return appeal
	}

	async changeStatus(appealId: number): Promise<Appeal> {
		const appeal = await this.getAppealById(appealId)
		const updAppeal = this.appealRepository.merge(appeal, {status: 'В работе'}).save()

		return updAppeal
	}

	async closeAppeal(appealId: number, closeInfo: ICloseAppeal): Promise<Appeal> {
		const appeal = await this.getAppealById(appealId)
		const updAppeal = this.appealRepository.merge(appeal, {status: 'Завершено', result: closeInfo.result}).save()

		return updAppeal
	}

	async cancelAppeal(appealId: number, cancelInfo: ICancelAppeal): Promise<Appeal> {
		const appeal = await this.getAppealById(appealId)
		const updAppeal = this.appealRepository.merge(appeal, { status: 'Отменено', cancellationMessage: cancelInfo.cancellationMessage }).save()

		return updAppeal
	}

	async cancelAllAppeal(): Promise<void> {
		await this.appealRepository.update(
			{ status: 'В работе' },
			{ status: 'Отменено', cancellationMessage: 'Отмена всех обращений!' }
		)
	}

	async deleteAppeal(appealId: number): Promise<void> {
		await this.getAppealById(appealId)

		await this.appealRepository.delete(appealId)
	}
}
