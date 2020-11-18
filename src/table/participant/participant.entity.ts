import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { QuizGame } from '../quiz_game/quiz_game.entity';

@Entity('participant', { orderBy: { participant_id: 'ASC' } })
export class Participant {
  @PrimaryGeneratedColumn()
  participant_id: number;

  @Column()
  quiz_game_id: number;

  @Column()
  participant_name: string;

  @Column()
  score: number;

  @ManyToOne(() => QuizGame, quizGame => quizGame.participants)
  quizGame: QuizGame;

}
