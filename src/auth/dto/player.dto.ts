import { IsString, MinLength } from 'class-validator';

export class IPlayerDTO {
    
    name:string;
    email:string;
    dateOfBirth:Date;
}