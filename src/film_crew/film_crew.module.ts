import { Module } from '@nestjs/common';
import { FilmCrewService } from './film_crew.service';
import { FilmCrewController } from './film_crew.controller';
import {CrewRepository} from './film_crew.repository';
import { SupabaseService } from 'src/service/supabase.service';

@Module({
  providers: [FilmCrewService, CrewRepository, SupabaseService],
  controllers: [FilmCrewController]
})
export class FilmCrewModule {}
