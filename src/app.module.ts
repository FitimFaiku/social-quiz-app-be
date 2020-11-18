import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
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
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.MS_TableHost,
      port: 5432,
      username: process.env.MS_TableUsername,
      password: process.env.MS_TablePassword,
      database: process.env.MS_TableName,
      schema: 'dbo',
      entities: [Answer, Choice, FriendRequest, Friendship, HostQuiz, Participant, Player, Post, Question, Quiz, QuizGame ],
      logging: ['error']
    }),
    LoginModule,
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
    QuizGameModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
