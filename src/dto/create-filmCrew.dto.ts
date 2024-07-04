import { IsNumber } from "class-validator";

export class CreateFilmCrewDto {


  @IsNumber()
   film_id: number;

   @IsNumber()
   crew_id: number;
}