import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateFilmShootingLocationDto {
    @IsNumber()
    film_id: number;

    @IsNumber()
    shooting_location_id: number;
    
}