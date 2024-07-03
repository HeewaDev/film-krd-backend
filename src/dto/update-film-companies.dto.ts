// update-film-company.dto.ts
import { IsInt, IsOptional } from 'class-validator';

export class UpdateFilmCompanyDto {
  @IsOptional()
  @IsInt()
  readonly film_id?: number;

  @IsOptional()
  @IsInt()
  readonly company_id?: number;
}
