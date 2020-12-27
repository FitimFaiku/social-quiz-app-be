import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PlayerModule } from 'src/table/player/player.module';
import { AuthService } from './auth/auth.service';
import { jwtConstants } from './auth/constants';
import { JwtStrategy } from './auth/jwt.strategy';
import { LocalStrategy } from './auth/local.strategy';
import { CryptoService } from './crypto/crypto.service';

@Module({
  imports: [
    PlayerModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [
    CryptoService,
    JwtStrategy,
    AuthService,
    LocalStrategy,
  ],
  exports: [CryptoService, AuthService],
})
export class UtilsModule {}
