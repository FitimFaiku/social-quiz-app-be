import { Controller, Get,Post, Body, Request, UseGuards, Param, UseInterceptors, ClassSerializerInterceptor, HttpException } from '@nestjs/common';
import { IRegistrationStatus } from 'src/auth/dto/register.dto';
import { Player } from 'src/table/player/player.entity';
import { PlayerService } from 'src/table/player/player.service';
import { AuthService } from 'src/utils/auth/auth.service';
import { LocalAuthGuard } from 'src/utils/auth/local-auth.guard';
import { CreateUserBodyDTO } from './requestDTO';

@Controller('v1/player')
export class PlayerController {
  constructor(private playerService: PlayerService, private authService:AuthService) {}

  // @UseGuards(LocalAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async findAll():Promise<Player[]> {
    const result=  await this.playerService.findAll();
    return result;
  }

  @UseGuards(LocalAuthGuard)
  @Get(':id')
  async findById(@Param('id') id: number) {
    const result =  await this.playerService.findById(id);
    return result;
  }

}
