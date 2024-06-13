import { IsEnum,IsObject, IsString, MinLength, IsDate, MaxLength, IsOptional, IsNumberString, IsArray, IsUrl } from "class-validator";
import { v4 as uuidv4 } from 'uuid'; 
enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
}

export class CreateCrewDto {

    
    @IsString()
    @IsOptional()
    @MinLength(3, { message: "name must be 3 or more characters" })
    @MaxLength(40, { message: 'Name must not exceed 40 characters' })
    name?: string;

    @IsString()
    description?: string;

    @IsString()
    city?: string;

    @IsEnum(Gender)
    gender?: Gender;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    languagesspoken?: string[];

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    awards?: string[];

    @IsDate()
    birthdate?: Date;

    @IsString()
    birthplace?: string;

    @IsNumberString() // If it can be both number and string
    company_id?: string;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    profession?: string[];

    @IsObject()
    @IsOptional()
    img?: Record<string, any>; // This allows any structure of JSONB data

    @IsString()
    contactinfo?: string;
}
