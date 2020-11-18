import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { HostQuiz } from '../host_quiz/host_quiz.entity';
import { Player } from '../player/player.entity';
import { Question } from '../question/question.entity';

@Entity('quiz', { orderBy: { quiz_id: 'ASC' } })
export class Quiz {
  @PrimaryGeneratedColumn()
  quiz_id: number;

  @Column()
  creeated_from_plyer_id: number;

  @Column()
  creeated_from_quiz_id: number;

  @Column()
  quiz_title: string;

  @Column()
  quiz_description: string;

  @Column()
  is_active: boolean;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @ManyToOne(() => Player, player => player.quize)
  player: Player;

  @OneToMany(() => HostQuiz, hostQuize => hostQuize.quiz)
  hostQuize: HostQuiz[];

  @OneToMany(() => Question, questions => questions.quiz)
  questions: Question[];

}
