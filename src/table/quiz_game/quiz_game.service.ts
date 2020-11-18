import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuizGame } from './quiz_game.entity';


@Injectable()
export class QuizGameService {
  constructor(
    @InjectRepository(QuizGame)
    private readonly quizGameRepository: Repository<QuizGame>,
  ) {}

  findById(quiz_game_id: number) {
    return this.quizGameRepository.findOne({
      where: { quiz_game_id },
    });
  }
}
