import { Module } from '@nestjs/common';
import { FilmCompaniesService } from './film_companies.service';
import { FilmCompaniesController } from './film_companies.controller';
import { FilmCompaniesRepository } from './film-companies.repository';
import { SupabaseService } from 'src/service/supabase.service';

@Module({
  providers: [FilmCompaniesService, FilmCompaniesRepository, SupabaseService],
  controllers: [FilmCompaniesController]
})
export class FilmCompaniesModule {}
