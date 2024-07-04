
import { IsNumber } from "class-validator";

export class UpdateFilmCastDto {
@IsNumber()
    film_id: number;
    cast_id: number;
    new_cast_id: number;
}