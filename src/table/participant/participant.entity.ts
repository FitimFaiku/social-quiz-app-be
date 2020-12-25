import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Choice } from '../choice/choice.entity';
import { QuizGame } from '../quiz_game/quiz_game.entity';

@Entity('participant', { orderBy: { id: 'ASC' } })
export class Participant {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => QuizGame, quizGame => quizGame.participants)
  quizGame: QuizGame;

  @Column()
  participant_name: string;

  @Column()
  score: number;

  @OneToMany(() => Choice, choices => choices.participant)
  choices: Choice[];
}
