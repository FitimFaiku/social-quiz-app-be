import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './player.entity';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}

  findById(player_id: number) {
    return this.playerRepository.findOne({
      where: { player_id },
    });
  }

  findByPlayerName(player_name: string) {
    return this.playerRepository.findOne({
      where: { player_name: player_name },
    });
  }

  savePlayer(player:Player) {
    return this.playerRepository.save(player);
  }
}
