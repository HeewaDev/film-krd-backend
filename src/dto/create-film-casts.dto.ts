import { IsNumber } from "class-validator";





export class CreateFilmCastDto {
  
    @IsNumber()
    film_id: number;
    cast_id: number;
      
      
}