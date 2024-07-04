import { Module } from '@nestjs/common';
import { FilmLocationController } from './FilmLocationController';
import { FilmLocationService } from './film_location.service';

@Module({
  controllers: [FilmLocationController],
  providers: [FilmLocationService]
})
export class FilmLocationModule {}
