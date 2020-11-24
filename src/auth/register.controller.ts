import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/utils/auth/auth.service';
import { LocalAuthGuard } from 'src/utils/auth/local-auth.guard';
import { IRegistrationStatus, RegisterDTO } from './dto/register.dto';

@Controller('v1/auth')
export class RegisterController {
  constructor(private authService: AuthService) {}

  //@UseGuards(LocalAuthGuard)
  @Post('signup')
  async register(@Request() req:({body:RegisterDTO})) {
    console.log("request:", req);
    let status: IRegistrationStatus = {
      success: true,   
      message: 'user registered',
    };
    try {
        await this.authService.register(req.body);
    } catch (err) {
        console.log(err);
        status = {
            success: false,        
            message: err,
        };    
    }
    return status;  
  }
}
