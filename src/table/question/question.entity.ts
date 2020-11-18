import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Answer } from '../answer/answer.entity';
import { Quiz } from '../quiz/quiz.entity';

@Entity('question', { orderBy: { question_id: 'ASC' } })
export class Question {
  @PrimaryGeneratedColumn()
  question_id: number;

  @Column()
  quiz_id: number;

  @Column()
  question_category: string;

  @Column()
  question_number: number;

  @Column()
  question: string;

  @Column()
  duration_in_sec: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @ManyToOne(() => Quiz, quiz => quiz.questions)
  quiz: Quiz;

  @OneToMany(() => Answer, answers => answers.question)
  answers: Answer[];
}
