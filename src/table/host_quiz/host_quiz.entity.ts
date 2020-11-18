import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Player } from '../player/player.entity';
import { Quiz } from '../quiz/quiz.entity';

@Entity('host_quiz', { orderBy: { host_quiz_id: 'ASC' } })
export class HostQuiz {
  @PrimaryGeneratedColumn()
  host_quiz_id: number;

  @Column()
  player_id: number;

  @Column()
  quiz_id: number;

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
  updated_at: string;

  @ManyToOne(() => Player, player => player.hostQuize)
  player: Player;

  @ManyToOne(() => Quiz, quiz => quiz.hostQuize)
  quiz: Quiz;

}
