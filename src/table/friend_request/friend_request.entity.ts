import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { Player } from '../player/player.entity';

@Entity('friend_request', { orderBy: { id: 'ASC' } })
export class FriendRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Player)
  @JoinColumn([ { name: "player_1Id", referencedColumnName: "id" }])
  player_1: Player;

  @ManyToOne((type) => Player)
  @JoinColumn([ { name: "player_2Id", referencedColumnName: "id" }])
  player_2: Player;

  @Column()
  request_message: string;

  @Column()
  status: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
