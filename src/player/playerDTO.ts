import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsNotEmpty, IsString } from "class-validator";
import { Player } from "src/table/player/player.entity";


export class UpdatePlayerDTO {  

    @IsDateString()
    dateOfBirth:string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    adress:string;


}

