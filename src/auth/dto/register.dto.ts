import { IsDateString, IsString, MinLength } from 'class-validator';

export class RegisterDTO {
  @IsString()
  @MinLength(4)
  username: string;
  
  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @MinLength(6)
  email:string;

  @IsDateString()
  dateOfBirth:string;
}

export interface IRegistrationStatus {
  success: boolean,
  message: string,
}

