import { Controller, Get,Post, Body, Request, UseGuards, Param, UseInterceptors, ClassSerializerInterceptor, HttpException } from '@nestjs/common';
import { IRegistrationStatus } from 'src/auth/dto/register.dto';
import { Player } from 'src/table/player/player.entity';
import { PlayerService } from 'src/table/player/player.service';
import { Question } from 'src/table/question/question.entity';
import { QuestionService } from 'src/table/question/question.service';
import { Quiz } from 'src/table/quiz/quiz.entity';
import { QuizService } from 'src/table/quiz/quiz.service';
import { AuthService } from 'src/utils/auth/auth.service';
import { LocalAuthGuard } from 'src/utils/auth/local-auth.guard';
import { Connection, getRepository } from 'typeorm';

@Controller('v1/question')
export class QuestionController {
  constructor(private questionService:QuestionService) {}

  //@UseGuards(LocalAuthGuard)
  @Get('quiz/:id')
  async getQuestions(@Param('id') id: number) {
    return getRepository(Question).createQueryBuilder("question").where("question.quizid = :id").setParameter("id", id).leftJoinAndSelect("question.answers", "answer").getMany();
    // return await this.questionService.findByQuizId(id);
  }

}
