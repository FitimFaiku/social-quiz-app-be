import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdatePlayerDTO } from 'src/player/playerDTO';
import { CreateUserBodyDTO } from 'src/player/requestDTO';
import { Repository } from 'typeorm';
import { Player } from './player.entity';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}

  findAll(){
    return this.playerRepository.find();
  }

  findById(id: number) {
    return this.playerRepository.findOne({
      where: { id },
    });
  }

  findByIdAndName(id:number, player_name:string) {
    return this.playerRepository.findOne({
      where: { id, player_name },
    });
  }

  findByPlayerName(player_name: string) {
    return this.playerRepository.findOne({
      where: { player_name: player_name },
    });
  }

  savePlayer(player:CreateUserBodyDTO) {
    return this.playerRepository.save(player);
  }
  public async update(
    id: number,
    newValue: CreateUserBodyDTO,
  ){//}: Promise<Player | null> {
    // const todo = await this.todoRepository.findOneOrFail(id);
    // if (!todo.id) {
    //   // tslint:disable-next-line:no-console
    //   console.error("Todo doesn't exist");
    // }
    // await this.todoRepository.update(id, newValue);
    // return await this.todoRepository.findOne(id);
  }

  async updatePlayerByIdAndPlayerDTO(id, playerDTO:UpdatePlayerDTO) {
    const player = await this.playerRepository.findOne({where: id});
    if(!player){
      throw new NotFoundException('my message from NotFoundException');
    } else {
      // TODO
      
    }
  }

}
