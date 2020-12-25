import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from './quiz.entity';


@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
  ) {}

  findById(player_id: number) {
    return this.quizRepository.findOne({
      where: { player_id },
    });
  }

  findByQuizID(id: number){
    return this.quizRepository.find({
      where: { id },
    });
  }

  findAllPublicAndActive(){
    return this.quizRepository.find({
      where: { is_active:true, is_private:false},
    });
  }

  create(quiz:Quiz) {
    return this.quizRepository.save(quiz);
  }
}
