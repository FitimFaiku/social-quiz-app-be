import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Answer } from './answer.entity';


@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer)
    private readonly answerRepository: Repository<Answer>,
  ) {}

  findById(player_id: number) {
    return this.answerRepository.findOne({
      where: { player_id },
    });
  }

  deleteById(id:number){
    return this.answerRepository.delete(id);
  }
  
}
