import "reflect-metadata"
import { DataSource } from "typeorm"
import { Appeal } from "../entity/appeal.entity"

export const DataBaseConnect = new DataSource({
  type: "sqlite",
  database: "./db/db.sqlite",
  synchronize: true,
  logging: false,
  entities: [Appeal],
  migrations: [],
  subscribers: [],
})
