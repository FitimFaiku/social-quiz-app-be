import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/utils/auth/constants';
import { JwtStrategy } from 'src/utils/auth/jwt.strategy';
import { UtilsModule } from 'src/utils/utils.module';
import { FactController } from './facts.controller';



@Module({
  controllers: [FactController],
  imports: [
    UtilsModule,
    JwtModule.register({
      secret:
      jwtConstants.secret,
      signOptions: {
          expiresIn: '1d',
      },
    }),
    
  ],
  providers: [JwtStrategy, FactController]
})
export class FactControllerModule {}
