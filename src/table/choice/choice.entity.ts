import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { QuizGame } from '../quiz_game/quiz_game.entity';

@Entity('choice', { orderBy: { id: 'ASC' } })
export class Choice {
  @PrimaryGeneratedColumn()
  choice_id: number;

  @Column()
  quiz_game_id: number;

  @Column()
  participant_id: number;

  @Column()
  correct: Boolean;

  @ManyToOne(() => QuizGame, quizGame => quizGame.choices)
  quizGame: QuizGame;

  
}
