import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthCheckService, TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { HealthModule } from './health/health.module';

import { PlayerControllerModule } from './player/player.module';
import { Answer } from './table/answer/answer.entity';
import { AnswerModule } from './table/answer/answer.module';
import { Choice } from './table/choice/choice.entity';
import { ChoiceModule } from './table/choice/choice.module';
import { Friendship } from './table/friendship/friendship.entity';
import { FriendshipModule } from './table/friendship/friendship.module';
import { FriendRequest } from './table/friend_request/friend_request.entity';
import { FriendRequestModule } from './table/friend_request/friend_request.module';
import { HostQuiz } from './table/host_quiz/host_quiz.entity';
import { HostQuizModule } from './table/host_quiz/host_quiz.module';
import { Participant } from './table/participant/participant.entity';
import { ParticipantModule } from './table/participant/participant.module';
import { Player } from './table/player/player.entity';
import { PlayerModule } from './table/player/player.module';
import { Post } from './table/post/post.entity';
import { PostModule } from './table/post/post.module';
import { Question } from './table/question/question.entity';
import { QuestionModule } from './table/question/question.module';
import { Quiz } from './table/quiz/quiz.entity';
import { QuizModule } from './table/quiz/quiz.module';
import { QuizGame } from './table/quiz_game/quiz_game.entity';
import { QuizGameModule } from './table/quiz_game/quiz_game.module';

@Module({
  imports: [
    // health check
    TerminusModule,
    HealthModule,
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_TableHost,
      port: 5432,
      username: process.env.PG_TableUsername,
      password: process.env.PG_TablePassword,
      database: process.env.PG_TableName,
      schema: process.env.PG_SCHEMA,
      entities: [Answer, Choice, FriendRequest, Friendship, HostQuiz, Participant, Player, Post, Question, Quiz, QuizGame ],
      logging: ['error']
    }),
    AuthModule,
    AnswerModule,
    ChoiceModule,
    FriendRequestModule,
    FriendshipModule,
    HostQuizModule,
    ParticipantModule,
    PlayerModule,
    PostModule,
    QuestionModule,
    QuizModule,
    QuizGameModule,
    PlayerControllerModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
