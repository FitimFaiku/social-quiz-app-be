import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/utils/auth/auth.service';
import { LocalAuthGuard } from 'src/utils/auth/local-auth.guard';

@Controller('v1/auth')
export class LoginController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async login(@Request() req) {
    return this.authService.loginAndCreateTempTokenKey(req.body);
  }
}
