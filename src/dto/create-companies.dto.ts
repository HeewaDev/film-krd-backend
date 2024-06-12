import {IsEmail, IsString, IsPhoneNumber,IsUrl, IsObject,} from 'class-validator'




export class CreateCompaniesDto {

    @IsString()
    name?: string;


    @IsPhoneNumber()
    phone?: number;


    @IsString()
     type?: string;


     @IsString()
     description?: string;

     @IsString()
     address?: string;
     
     @IsEmail()
     email?:string;


     @IsUrl()
     website?: string;

     
     @IsObject() // check if it's String or not! discuss the thing
     img?: string;

}