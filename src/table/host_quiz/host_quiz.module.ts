import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HostQuiz } from './host_quiz.entity';
import { HostQuizService } from './host_quiz.service';


@Module({
  imports: [TypeOrmModule.forFeature([HostQuiz])],
  providers: [HostQuizService],
  exports: [HostQuizService],
})
export class HostQuizModule {}
