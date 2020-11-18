import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/utils/auth/auth.service';
import { LocalAuthGuard } from 'src/utils/auth/local-auth.guard';

@Controller('login')
export class LoginController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
