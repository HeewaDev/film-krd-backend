import { Module } from '@nestjs/common';
import { FilmLocationController } from './film_location.controller';
import { FilmLocationService } from './film_location.service';

@Module({
  controllers: [FilmLocationController],
  providers: [FilmLocationService]
})
export class FilmLocationModule {}
