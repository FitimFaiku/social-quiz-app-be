import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PlayerModule } from 'src/table/player/player.module';
import { jwtConstants } from 'src/utils/auth/constants';
import { JwtStrategy } from 'src/utils/auth/jwt.strategy';
import { UtilsModule } from 'src/utils/utils.module';
import { PlayerController} from './player.controller';

@Module({
  controllers: [PlayerController],
  imports: [
    UtilsModule,
    JwtModule.register({
      secret:
      jwtConstants.secret,
      signOptions: {
          expiresIn: '1d',
      },
    }),
    PlayerModule
  ],
  providers: [JwtStrategy, PlayerController]
})
export class PlayerControllerModule {}
