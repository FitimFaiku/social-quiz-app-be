import { Controller, Get,Post, Body, Request, UseGuards, Param, UseInterceptors, ClassSerializerInterceptor, HttpException, Delete } from '@nestjs/common';
import { IRegistrationStatus } from 'src/auth/dto/register.dto';
import { Player } from 'src/table/player/player.entity';
import { PlayerService } from 'src/table/player/player.service';
import { Question } from 'src/table/question/question.entity';
import { Quiz } from 'src/table/quiz/quiz.entity';
import { QuizService } from 'src/table/quiz/quiz.service';
import { AuthService } from 'src/utils/auth/auth.service';
import { JwtStrategy } from 'src/utils/auth/jwt.strategy';
import { LocalAuthGuard } from 'src/utils/auth/local-auth.guard';
import { getRepository } from 'typeorm';
import { QuizControllerModule } from './quiz.module';

@Controller('v1/quiz')
export class QuizController {
  constructor(private quizService: QuizService, private playerService:PlayerService) {}


  @UseGuards(JwtStrategy)
  @Get(':id')
  async findById(@Param('id') id: number) {
    const result =  await this.quizService.findById(id);
    return result;
  }

  @UseGuards(JwtStrategy)
  @Delete(':id')
  async deleteById(@Param('id') id: number) {
    return await this.quizService.deleteById(id);

  }

  @UseGuards(JwtStrategy)
  @Get()
  async findAllPublicAndActive() {
    const result =  await this.quizService.findAllPublicAndActive();
    return result;
  }


  @UseGuards(JwtStrategy)
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
      // First quiz, then Questions, then Answers --> cascade
      const quiz = await getRepository(Quiz).save(req.body.createQuiz);
    } catch (err) {
        console.log(err);
    }
    return result;  
  }
}
