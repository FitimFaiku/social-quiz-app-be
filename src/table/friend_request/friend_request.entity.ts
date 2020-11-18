import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Player } from '../player/player.entity';

@Entity('friend_request', { orderBy: { id: 'ASC' } })
export class FriendRequest {
  @PrimaryGeneratedColumn()
  friend_request_id: number;

  @Column()
  player_id_1: number;

  @Column()
  player_id_2: number;

  @Column()
  request_message: string;

  @Column()
  status: string;

  @Column()
  created_at: Date;

  @ManyToOne(() => Player, player => player.friendRequests)
  player: Player;
}
