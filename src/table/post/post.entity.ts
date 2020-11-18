import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Player } from '../player/player.entity';
import { Quiz } from '../quiz/quiz.entity';

@Entity('post', { orderBy: { id: 'ASC' } })
export class Post {
  @PrimaryGeneratedColumn()
  post_id: number;

  @Column()
  quiz_id: number;

  @Column()
  player_id: number;

  @Column()
  question_amount: number;

  @Column()
  post_description: string;

  @Column()
  post_title: boolean;

  @Column()
  created_at: Date;

  @Column()
  updated_at: string;

  @ManyToOne(() => Player, user => user.posts)
  player: Player;

  @OneToOne(() => Quiz)
  @JoinColumn()
  quiz: Quiz;

}
