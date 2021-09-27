import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
// 테이블 클래스
@Entity()
export default class Board extends BaseEntity {
  @PrimaryGeneratedColumn('increment') // PK
  number!: number

  @PrimaryGeneratedColumn('uuid')
  _id!: string

  @Column({type: 'text'})
  writer!: string

  @Column({type: 'text'})
  title!: string

  @Column({type: 'integer'})
  age!: number
  
  @Column({type: 'timestamp', default: null, nullable: true})
  deletedAt?: Date
}