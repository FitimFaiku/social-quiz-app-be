import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { Question } from '../question/question.entity';

@Entity('answer', { orderBy: { id: 'ASC' } })
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Question, question => question.answers, {onDelete:'CASCADE'})
  @JoinColumn([ { name: 'questionid', referencedColumnName: 'id' }])
  question: Question;

  @Column()
  answer: string;

  @Column()
  is_correct: boolean;

}
