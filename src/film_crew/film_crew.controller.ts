import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { FilmCrewService } from './film_crew.service';
import { FilmCrew } from './film_crew.entity';
import { CreateFilmCrewDto } from 'src/dto/create-filmCrew.dto';
import { UpdateFilmCrewDto } from 'src/dto/update-filmCrew.dto';

@Controller('film_crew')
export class FilmCrewController {
    constructor(private readonly filmCrewService: FilmCrewService){}


    @Get()
    async GetFilmCrewByID(@Query('film_id') id:string): Promise<FilmCrew>{
        return this.filmCrewService.findCrewByFilm_id(+id)
    }


    @Post()
    async addCrewToFilm(@Body() createFilmCrewDto: CreateFilmCrewDto) {
      return this.filmCrewService.addCrewToFilm(createFilmCrewDto.film_id, createFilmCrewDto.crew_id);
    }
  
    @Get(':film_id')
    async getCrewByFilmId(@Param('film_id') film_id: number) {
      return this.filmCrewService.findCrewByFilm_id(film_id);
    }
  
    @Put()
    async updateCrewInFilm(@Body() updateFilmCrewDto: UpdateFilmCrewDto) {
      return this.filmCrewService.UpdateCrewInFilm(
        updateFilmCrewDto.film_id,
        updateFilmCrewDto.crew_id,
        updateFilmCrewDto.new_crew_id
      );
    }
  
    @Delete()
    async removeCrewFromFilm(@Body() createFilmCrewDto: CreateFilmCrewDto) {
      return this.filmCrewService.removeCrewFromFilm(createFilmCrewDto.film_id, createFilmCrewDto.crew_id);
    }
}
