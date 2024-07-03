import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { FilmCrewService } from './film_crew.service';
import { FilmCrew } from './film_crew.entity';

@Controller('film_crew')
export class FilmCrewController {
    constructor(private readonly filmCrewService: FilmCrewService){}


    @Get()
    async GetFilmCrewByID(@Query('film_id') id:string): Promise<FilmCrew>{
        return this.filmCrewService.findCrewByFilm_id(+id)
    }
}
