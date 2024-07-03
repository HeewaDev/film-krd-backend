import { IsInt, IsNumber, IsString } from "class-validator";


export class CreateFilmCompaniesDto {
 @IsString()
 role: string;

 @IsInt()
  film_id: number;

 @IsNumber()
 company_id: number;



 
}


