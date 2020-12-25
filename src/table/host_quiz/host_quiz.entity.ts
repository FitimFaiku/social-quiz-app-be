import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Player } from '../player/player.entity';
import { Quiz } from '../quiz/quiz.entity';
import { QuizGame } from '../quiz_game/quiz_game.entity';

@Entity('host_quiz', { orderBy: { id: 'ASC' } })
export class HostQuiz {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Player, player => player.hostQuize)
  player: Player;

  @ManyToOne(() => Quiz, quiz => quiz.hostQuize)
  quiz: Quiz;

  @Column()
  lasts_till: Date;

  @Column()
  quiz_title: string;

  @Column()
  quiz_description: string;

  @Column()
  is_active: Boolean;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToMany(() => QuizGame, quizgame => quizgame.host_quizId)
  quizGames: QuizGame[];

}
