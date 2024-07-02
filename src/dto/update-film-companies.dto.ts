import { PartialType } from '@nestjs/mapped-types';
import { CreateFilmCompaniesDto } from './create-film-companies.dto';

export class UpdateFilmCompaniesDto extends PartialType(CreateFilmCompaniesDto) {}
