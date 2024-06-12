import { Module } from '@nestjs/common';
import { FilmCompaniesService } from './film_companies.service';
import { FilmCompaniesController } from './film_companies.controller';

@Module({
  providers: [FilmCompaniesService],
  controllers: [FilmCompaniesController]
})
export class FilmCompaniesModule {}
