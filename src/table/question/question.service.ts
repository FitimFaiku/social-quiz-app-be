import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { Question } from './question.entity';


@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  findByQuizId(id: number){
    // console.log("ID,", id);
  
    return this.questionRepository.find({where: {quiz:id}});
  }
}
