import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { Quiz } from './quiz.entity';


@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
  ) {}

  findByPlayerId(player_id: number) {
    return this.quizRepository.findOne({
      where: { player_id },
    });
  }

  findById(id: number) {
    return this.quizRepository.findOne({
      where: { id },
    });
  }

  findByQuizID(id: number){
    return this.quizRepository.find({
      where: { id },
    });
  }

  findAllPublicAndActive(){
    // return getRepository(Quiz).createQueryBuilder("quiz").leftJoinAndSelect("quiz.created_from_playerid", "created_from_playerid").getMany();
    /* return this.quizRepository.find({
      where: { is_active:true, is_private:false},
    }); */
  }

  create(quiz:Quiz) {
    return this.quizRepository.save(quiz);
  }

  deleteById(id:number){
    return this.quizRepository.delete(id);
  }
}
