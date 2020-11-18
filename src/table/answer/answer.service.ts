import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Answer } from './answer.entity';


@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer)
    private readonly playerRepository: Repository<Answer>,
  ) {}

  findById(player_id: number) {
    return this.playerRepository.findOne({
      where: { player_id },
    });
  }
}
