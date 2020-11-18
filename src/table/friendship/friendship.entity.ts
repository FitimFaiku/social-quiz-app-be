import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Player } from '../player/player.entity';

@Entity('friendship', { orderBy: { friendship_id: 'ASC' } })
export class Friendship {
  @PrimaryGeneratedColumn()
  friendship_id: number;

  @Column()
  player_id_1: number;

  @Column()
  player_id_2: number;

  @Column()
  date_added: Date;

  @ManyToOne(() => Player, player => player.friendships)
  player: Player;

}
