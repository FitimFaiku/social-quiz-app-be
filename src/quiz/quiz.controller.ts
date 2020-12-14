import { Controller, Get,Post, Body, Request, UseGuards, Param, UseInterceptors, ClassSerializerInterceptor, HttpException } from '@nestjs/common';
import { IRegistrationStatus } from 'src/auth/dto/register.dto';
import { Player } from 'src/table/player/player.entity';
import { PlayerService } from 'src/table/player/player.service';
import { Quiz } from 'src/table/quiz/quiz.entity';
import { QuizService } from 'src/table/quiz/quiz.service';
import { AuthService } from 'src/utils/auth/auth.service';
import { LocalAuthGuard } from 'src/utils/auth/local-auth.guard';

@Controller('v1/quiz')
export class QuizController {
  constructor(private quizService: QuizService, private authService:AuthService) {}


  // @UseGuards(LocalAuthGuard)
  @Get(':id')
  async findById(@Param('id') id: number) {
    const result =  await this.quizService.findById(id);
    return result;
  }

}
