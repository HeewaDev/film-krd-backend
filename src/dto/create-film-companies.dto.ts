import { IsNumber, IsString } from "class-validator";


export class CreateFilmCompaniesDto {
 @IsString()
 role: string;

 @IsNumber()
 company_id: number;



 
}


