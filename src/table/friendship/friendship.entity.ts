import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { Player } from '../player/player.entity';

@Entity('friendship', { orderBy: { id: 'ASC' } })
export class Friendship {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Player)
  @JoinColumn([ { name: "player_1id", referencedColumnName: "id" }])
  player_1: Player;

  @ManyToOne((type) => Player)
  @JoinColumn([ { name: "player_2id", referencedColumnName: "id" }])
  player_2: number;

  @Column()
  date_added: Date;

  /* @ManyToOne(() => Player, player => player.friendships)
  player: Player; */

}
