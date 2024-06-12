import { Module } from '@nestjs/common';
import { FilmCrewService } from './film_crew.service';
import { FilmCrewController } from './film_crew.controller';

@Module({
  providers: [FilmCrewService],
  controllers: [FilmCrewController]
})
export class FilmCrewModule {}
