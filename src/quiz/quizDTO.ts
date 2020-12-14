import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsNotEmpty, IsString } from "class-validator";

export class IdParamsDTO {
    id: number;
}

export class CreateQuizDTO {

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    player_name: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    password: string;


  }

  export class UpdateQuizDTO {

  }