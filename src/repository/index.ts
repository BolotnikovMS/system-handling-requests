import { DataBaseConnect } from '../config/database'
import { Appeal } from '../entity/appeal.entity'
import { AppealService } from '../services/appeal.service'

export const appealRepository = new AppealService(DataBaseConnect.getRepository(Appeal))
