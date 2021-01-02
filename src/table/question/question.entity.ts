import { REPL_MODE_STRICT } from 'repl';
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Answer } from '../answer/answer.entity';
import { Quiz } from '../quiz/quiz.entity';

@Entity('question', { orderBy: { id: 'ASC' } })
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Quiz, quiz => quiz.questions, {onDelete: 'RESTRICT'})
  @JoinColumn([ { name: 'quizid', referencedColumnName: 'id'}])
  quiz: Quiz;

  @Column()
  question_category: string;

  @Column()
  question_number: number;

  @Column()
  question: string;

  @Column()
  question_type: string;

  @Column()
  duration_in_sec: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToMany(() => Answer, answers => answers.question, { cascade: true })
  answers: Answer[];
}
