import { IsString, IsOptional, IsEnum, IsArray, ValidateNested, IsEmail, IsPhoneNumber } from "class-validator";
import { Type, Transform } from "class-transformer";


enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
}

class ContactInfo {
    @IsEmail()
    email?: string;

    @IsPhoneNumber()
    phonenumber?: string;
}

export class CreateCastDto {
    @IsString()
    name: string;

    @ValidateNested()
    @Type(() => ContactInfo)
    @IsOptional()
    contactinfo?: ContactInfo;

    @IsString()
    @IsOptional()
    description?: string;

    @IsEnum(Gender)
    @IsOptional()
    gender?: Gender;

   
    @IsString({ each: true })
    @IsOptional()
    physicalfeatures?: string[];

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    languagesspoken?: string[];

    @IsString()
    @IsOptional()
    nationality?: string;
}
