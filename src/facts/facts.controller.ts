import { Controller, Get, Query, ParseIntPipe } from '@nestjs/common';
import { Fact } from 'src/table/fact/fact.entity';
import { Question } from 'src/table/question/question.entity';


import { getRepository } from 'typeorm';

@Controller('v1/facts')
export class FactController {
  constructor() {}

  //@UseGuards(JwtStrategy)
  @Get('random')
  async getQuestions(@Query("limit", ParseIntPipe) limit: number = 1) {
    return getRepository(Fact).createQueryBuilder("fact").orderBy("RANDOM()").limit(limit).getMany();
    // return await this.questionService.findByQuizId(id);
  }

}
