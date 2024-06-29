import { Module } from '@nestjs/common';
import { FilmCastsService } from './film_casts.service';
import { FilmCastsController } from './film_casts.controller';
import { FilmCastsRepository } from './film_casts.repository';
import { SupabaseService } from 'src/service/supabase.service';

@Module({
  providers: [FilmCastsService, FilmCastsRepository, SupabaseService],
  controllers: [FilmCastsController]
})
export class FilmCastsModule {}
