import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { Friendship } from '../friendship/friendship.entity';
import { FriendRequest } from '../friend_request/friend_request.entity';
import { HostQuiz } from '../host_quiz/host_quiz.entity';
import { Post } from '../post/post.entity';
import { Quiz } from '../quiz/quiz.entity';
import { Exclude } from 'class-transformer';

@Entity('player', { orderBy: { id: 'ASC' } })
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  player_name: string;

  @Column()
  e_mail_adress: string;

  @Column()
  date_of_birth: Date;

  @Column({ select: false })
  password: string;

  @Column({ select: false })
  password_salt: string;

  @Column()
  portal_id: number;

  @Column()
  portal_key: string;

  @Column({ select: false })
  failed_password_attempts: number;

  @Column()
  last_login_attempt_date: Date;

  @Column()
  temp_token_key: string;

  @Column()
  reset_token: string;

  @Column()
  reset_token_expiry_date: Date;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToMany(() => Post, posts => posts.player)
  posts: Post[];

  @OneToMany(() => FriendRequest, friendRequests => friendRequests.player_1)
  friendRequests: FriendRequest[];

  /* @OneToMany(() => Friendship, friendship => friendship.player)
  friendships: Friendship[]; */

  @OneToMany(() => Quiz, quiz => quiz.created_from_player)
  quize: Quiz[];

  @OneToMany(() => HostQuiz, hostQuize => hostQuize.player)
  hostQuize: HostQuiz[];

}
