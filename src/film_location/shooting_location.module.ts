import { Module } from '@nestjs/common';
import { FilmLocationController } from './shooting_location.controller';
import { FilmLocationService } from './shooting_location.service';

@Module({
  controllers: [FilmLocationController],
  providers: [FilmLocationService]
})
export class FilmLocationModule {}
