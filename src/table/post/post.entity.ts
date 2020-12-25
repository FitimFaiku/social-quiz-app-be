import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Player } from '../player/player.entity';
import { Quiz } from '../quiz/quiz.entity';

@Entity('post', { orderBy: { id: 'ASC' } })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Quiz)
  @JoinColumn()
  quiz: Quiz;

  @ManyToOne(() => Player, user => user.posts)
  player: Player;

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

}
