import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Question } from '../question/question.entity';

@Entity('answer', { orderBy: { id: 'ASC' } })
export class Answer {
  @PrimaryGeneratedColumn()
  answer_id: number;

  @Column()
  question_id: number;

  @Column()
  answer: string;

  @Column()
  is_correct: boolean;

  @ManyToOne(() => Question, question => question.answers)
  question: Question;

}
