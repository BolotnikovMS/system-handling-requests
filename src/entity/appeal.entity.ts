import moment from 'moment'
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('appeals')
export class Appeal extends BaseEntity {
	@PrimaryGeneratedColumn()
  id!: number

  @Column({
  	type: 'varchar',
   	length: 50,
  	default: 'Новое',
  })
  status!: string

	@Column({
    type: 'varchar',
    length: 150
  })
  title!: string

	@Column({
    type: 'text',
    length: 1000
  })
  description!: string

	@Column({
		type: 'text',
		length: 1000,
		nullable: true
	})
  result!: string

	@Column({
		type: 'text',
		length: 1000,
		nullable: true
	})
	cancellationMessage!: string

  @CreateDateColumn({
		type: 'date',
		transformer: {
			to(value: Date) {
				return moment(value).format('DD.MM.YYYY HH:mm')
			},
			from(value: Date) {
				return value
			}
		}
	})
	createdAt!: Date

	@UpdateDateColumn({
		type: 'date',
		transformer: {
			to(value: Date) {
				return value
			},
			from(value: Date) {
				return moment(value).format('DD.MM.YYYY HH:mm')
			}
		}
	})
  updatedAt!: Date
}
