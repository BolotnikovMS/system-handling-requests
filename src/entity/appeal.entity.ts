import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

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

  @Column({
		type: 'varchar'
	})
	createdAt!: string
}
