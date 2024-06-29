import { IsString, IsOptional, IsEnum, IsArray, ValidateNested, IsEmail, IsPhoneNumber } from "class-validator";
import { Type, Transform } from "class-transformer";




export class CreateFilmCastDto {
  
    @IsString()
    role: string;
}