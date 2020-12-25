import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PlayerModule } from 'src/table/player/player.module';
import { QuizModule } from 'src/table/quiz/quiz.module';
import { jwtConstants } from 'src/utils/auth/constants';
import { JwtStrategy } from 'src/utils/auth/jwt.strategy';
import { UtilsModule } from 'src/utils/utils.module';
import { QuizController } from './quiz.controller';


@Module({
  controllers: [QuizController],
  imports: [
    UtilsModule,
    PlayerModule,
    JwtModule.register({
      secret:
      jwtConstants.secret,
      signOptions: {
          expiresIn: '1d',
      },
    }),
    QuizModule
  ],
  providers: [JwtStrategy, QuizController]
})
export class QuizControllerModule {}