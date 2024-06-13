import { IsString, IsArray, IsOptional, IsNumber, IsDate } from 'class-validator';

export class CreateFilmDto {
  @IsString()
  title: string;

  @IsString()
  posterimageurl: string;

  @IsString()
  trailerurl: string;

  @IsString()
  synopsiskurdish: string;

  @IsDate()
  release_date: Date;

  @IsArray()
  @IsString({ each: true })
  genre: string[];

  @IsArray()
  @IsString({ each: true })
  keywords: string[];

  @IsString()
  synopsis: string;

  @IsNumber()
  duration: number;

  @IsString()
  language: string;

  @IsString()
  country: string;

  @IsNumber()
  budget: number;

  @IsNumber()
  boxoffice: number;

  @IsString()
  filmtype: string;

  @IsArray()
  @IsString({ each: true })
  awards: string[];

  @IsArray()
  @IsString({ each: true })
  nominations: string[];
}
