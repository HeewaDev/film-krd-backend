import { IsObject, IsString } from "class-validator";




export class CreateShootingLocationsDto {

    @IsString()
    name?: string;

    @IsString()
    city?: string;

    @IsString()
    country?: string;

    @IsString()
    description?: string;

    @IsString()
    location?: string;

    @IsString()
    img?: string;

    
}