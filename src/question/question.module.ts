import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PlayerModule } from 'src/table/player/player.module';
import { QuestionModule } from 'src/table/question/question.module';
import { QuizModule } from 'src/table/quiz/quiz.module';
import { jwtConstants } from 'src/utils/auth/constants';
import { JwtStrategy } from 'src/utils/auth/jwt.strategy';
import { UtilsModule } from 'src/utils/utils.module';
import { QuestionController } from './question.controller';


@Module({
  controllers: [QuestionController],
  imports: [
    UtilsModule,
    QuestionModule,
    JwtModule.register({
      secret:
      jwtConstants.secret,
      signOptions: {
          expiresIn: '1d',
      },
    }),
    
  ],
  providers: [JwtStrategy, QuestionController]
})
export class QuestionControllerModule {}
