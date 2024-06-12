import { Module } from '@nestjs/common';
import { FilmCastsService } from './film_casts.service';
import { FilmCastsController } from './film_casts.controller';

@Module({
  providers: [FilmCastsService],
  controllers: [FilmCastsController]
})
export class FilmCastsModule {}
