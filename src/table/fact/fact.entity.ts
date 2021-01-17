import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';


@Entity('fact', { orderBy: { id: 'ASC' } })
export class Fact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fact:string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
  
}
