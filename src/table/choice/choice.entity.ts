import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Participant } from '../participant/participant.entity';
import { QuizGame } from '../quiz_game/quiz_game.entity';

@Entity('choice', { orderBy: { id: 'ASC' } })
export class Choice {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => QuizGame, quizGame => quizGame.choices)
  quiz_game: QuizGame;

  @ManyToOne(() => Participant, participant => participant.choices)
  participant: Participant;


  @Column()
  participant_id: number;

  @Column()
  correct: Boolean;

  

  
}
