import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { FilmCrewService } from './film_crew.service';
import { FilmCrew } from './film_crew.entity';

@Controller('film_crew')
export class FilmCrewController {
    constructor(private readonly filmCrewService: FilmCrewService){}


    @Get()
    async GetFilmCrew(){
        return await this.filmCrewService.findAllCrew()
    }

    @Get(':id')
    async GetFilmCrewByID(@Param('id') id:number): Promise<FilmCrew>{
        return this.filmCrewService.findCrewByFilm_id(+id)
    }
}
