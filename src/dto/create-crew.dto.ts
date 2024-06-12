import {IsEnum, IsString, MinLength, IsDate, MaxLength, IsOptional, IsNumber, IsUrl} from "class-validator"
import {} from "class-transformer"
enum Gender{
    Male = 'male',
    Female = 'female',
    Other = 'other'
}
export class CreateCrewDto {

    @IsString()
    @IsOptional()
    @MinLength(3, {message: "name must be 3 or more character "})
    @MaxLength(40, { message: 'Name must not exceed 40 characters' })
    name?: string;


    @IsString()
    description?: string;


    @IsString()
    city?: string

    @IsEnum(Gender)
    gender?: Gender;


    @IsString()
    languageSpoken?: string;


    @IsString() 
    awards?: string;



    @IsDate()
    birthdate?: Date;


    @IsString()
    birthplace?: string;

    @IsNumber()
    company_id?: number;  /// number or string


    @IsString()
    profession?: string;

    @IsUrl() // url ? 
    img?: string;

    @IsString()
    contactinfo?: string


}