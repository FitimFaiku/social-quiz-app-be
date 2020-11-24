import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsNotEmpty, IsString } from "class-validator";

export class IdParamsDTO {
    id: number;
}

export class CreateUserBodyDTO {

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    player_name: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    password: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    e_mail_adress:string;

    @IsNotEmpty()
    @IsDateString()
    @ApiProperty()
    date_of_birth: Date;

  }