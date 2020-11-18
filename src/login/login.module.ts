import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { UtilsModule } from 'src/utils/utils.module';
import { JwtModule } from '@nestjs/jwt';
import { PlayerModule } from 'src/table/player/player.module';

@Module({
  controllers: [LoginController],
  imports: [
    PlayerModule,
    UtilsModule,
    JwtModule.register({
      secret:
        'v/eHtYcHvD/AkhmDrTtegruDp5DmoIJFYkqeidf6GpRfffz71O+hzIssyZatrc2Mpq5ZkFWMhHuAVxqwGMr5wg==',
      signOptions: {
        expiresIn: '1d',
      },
    }),
  ],
})
export class LoginModule {}
