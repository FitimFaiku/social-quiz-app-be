import { Controller, Get,Post, Body, Request, UseGuards, Param, UseInterceptors, ClassSerializerInterceptor, HttpException, Delete, HttpCode, Put } from '@nestjs/common';
import { IRegistrationStatus } from 'src/auth/dto/register.dto';
import { AnswerService } from 'src/table/answer/answer.service';
import { Player } from 'src/table/player/player.entity';
import { PlayerService } from 'src/table/player/player.service';
import { Question } from 'src/table/question/question.entity';
import { QuestionService } from 'src/table/question/question.service';
import { Quiz } from 'src/table/quiz/quiz.entity';
import { QuizService } from 'src/table/quiz/quiz.service';
import { AuthService } from 'src/utils/auth/auth.service';
import { JwtStrategy } from 'src/utils/auth/jwt.strategy';
import { LocalAuthGuard } from 'src/utils/auth/local-auth.guard';
import { getRepository } from 'typeorm';
import { QuizControllerModule } from './quiz.module';

@Controller('v1/quiz')
export class QuizController {
  constructor(private quizService: QuizService, private questionService: QuestionService, private answerService:AnswerService) {}


  @UseGuards(JwtStrategy)
  @Get(' player/:id')
  async findByPlayerId(@Param('id') id: number) {
    const result =  await this.quizService.findByPlayerId(id);
    return result;
  }

  @UseGuards(JwtStrategy)
  @Get(':id')
  async findById(@Param('id') id: number) {
    return await getRepository(Quiz).createQueryBuilder("quiz").where("quiz.id = :id").setParameter("id", id).leftJoinAndSelect("quiz.questions", "questions").leftJoinAndSelect("questions.answers", "answer").getOne();
    
  }

  @UseGuards(JwtStrategy)
  @HttpCode(204)
  @Delete(':id')
  async deleteById(@Param('id') id: number) {
    
      try {
        const quiz = await getRepository(Quiz).createQueryBuilder("quiz").where("quiz.id = :id").setParameter("id", id).leftJoinAndSelect("quiz.questions", "questions").leftJoinAndSelect("questions.answers", "answer").getOne();
        console.log("Quiz Select", quiz, "Questions:", quiz.questions);

        await Promise.all(quiz.questions.map(async question => {
          await Promise.all(question.answers.map(async answer => {
             await this.answerService.deleteById(answer.id);
          }));
          await this.questionService.deleteById(question.id);
        }));
        await this.quizService.deleteById(id); 
      } catch(e) {
        console.log("Exceprtion");
      }
      

    
    /* return await getRepository(Quiz).createQueryBuilder("quiz")
    .delete()
    .from(Quiz)
    .where("id = :id", { id: id }).execute(); */
    /* try {
      await this.quizService.findById(id);
    }
    return await this.quizService.deleteById(id); */

  }

  @UseGuards(JwtStrategy)
  @Get()
  async findAllPublicAndActive() {
    const quizes = await getRepository(Quiz).createQueryBuilder("quiz").leftJoin("quiz.created_from_player", "player").addSelect(['player.id']).getMany();
    return quizes;
  }


  @UseGuards(JwtStrategy)
  @Post('create')
  async create(@Request() req:({body:{createQuiz:Quiz}})) {

    
    let result = null;

    

    try {
      // result = await this.quizService.create(req.body.createQuiz);
      // First quiz, then Questions, then Answers --> cascade
      
      const quiz = await getRepository(Quiz).save(req.body.createQuiz);
      console.log("Sqaved Quiz", quiz);
      return quiz;
    } catch (err) {
        console.log(err);
    }
    //  return await this.quizService.findById(quiz.id);
    return result;  
  }

  @UseGuards(JwtStrategy)
  @Put('update/:id')
  async update(@Param('id') id: number,@Request() req:({body:{updateQuiz:Quiz}})) {
    let result = null;
    try {
      // result = await this.quizService.create(req.body.createQuiz);
      // First quiz, then Questions, then Answers --> cascade

      console.log("body", req.body.updateQuiz);

      let quiz = await getRepository(Quiz).createQueryBuilder("quiz").where("quiz.id = :id").setParameter("id", id).leftJoinAndSelect("quiz.questions", "questions").leftJoinAndSelect("questions.answers", "answer").getOne();
      quiz = req.body.updateQuiz;
      return await getRepository(Quiz).save(quiz);
    } catch (err) {
        console.log(err);
    }
    //  return await this.quizService.findById(quiz.id);
    return result;  
  }
}
