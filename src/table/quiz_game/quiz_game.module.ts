import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizGame } from './quiz_game.entity';
import { QuizGameService } from './quiz_game.service';


@Module({
  imports: [TypeOrmModule.forFeature([QuizGame])],
  providers: [QuizGameService],
  exports: [QuizGameService],
})
export class QuizGameModule {}
