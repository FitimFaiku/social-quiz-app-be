import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { Choice } from '../choice/choice.entity';
import { Participant } from '../participant/participant.entity';

@Entity('quiz_game', { orderBy: { quiz_game_id: 'ASC' } })
export class QuizGame {
  @PrimaryGeneratedColumn()
  quiz_game_id: number;

  @Column()
  host_quiz_id: number;

  @Column()
  start_time: Date;

  @Column()
  end_time: Date;

  @OneToMany(() => Participant, participant => participant.quizGame)
  participants: Participant[];

  @OneToMany(() => Choice, choices => choices.quizGame)
  choices: Choice[];

}
