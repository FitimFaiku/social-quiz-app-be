import { PrimaryGeneratedColumn, Column, Entity, OneToMany, ManyToOne } from 'typeorm';
import { Choice } from '../choice/choice.entity';
import { HostQuiz } from '../host_quiz/host_quiz.entity';
import { Participant } from '../participant/participant.entity';

@Entity('quiz_game', { orderBy: { id: 'ASC' } })
export class QuizGame {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => HostQuiz, hostQuiz => hostQuiz.quizGames)
  host_quizId: HostQuiz;

  @Column()
  start_time: Date;

  @Column()
  end_time: Date;

  @OneToMany(() => Participant, participant => participant.quizGame)
  participants: Participant[];

  @OneToMany(() => Choice, choices => choices.quiz_game)
  choices: Choice[];

}
