import { Controller, Get,Post, Body, Request, UseGuards, Param, UseInterceptors, ClassSerializerInterceptor, HttpException } from '@nestjs/common';
import { IRegistrationStatus } from 'src/auth/dto/register.dto';
import { Player } from 'src/table/player/player.entity';
import { PlayerService } from 'src/table/player/player.service';
import { Question } from 'src/table/question/question.entity';
import { Quiz } from 'src/table/quiz/quiz.entity';
import { QuizService } from 'src/table/quiz/quiz.service';
import { AuthService } from 'src/utils/auth/auth.service';
import { LocalAuthGuard } from 'src/utils/auth/local-auth.guard';
import { getRepository } from 'typeorm';

@Controller('v1/quiz')
export class QuizController {
  constructor(private quizService: QuizService, private playerService:PlayerService) {}


  // @UseGuards(LocalAuthGuard)
  @Get(':id')
  async findById(@Param('id') id: number) {
    const result =  await this.quizService.findById(id);
    return result;
  }

  @Get()
  async findAllPublicAndActive() {
    const result =  await this.quizService.findAllPublicAndActive();
    return result;
  }


  //@UseGuards(LocalAuthGuard)
  @Post('create')
  async create(@Request() req:({body:{createQuiz:Quiz}})) {

    /* getRepository(Role).save({
      id: 'e7ca',
      user: {
        id: '4f2f'
      }
    }) */
    
    let result = null;

    

    try {
      // result = await this.quizService.create(req.body.createQuiz);
      await getRepository(Quiz).save(req.body.createQuiz);
    } catch (err) {
        console.log(err);
    }
    return result;  
  }
}
