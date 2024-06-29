// film-casts.controller.ts

import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { FilmCastsService } from './film_casts.service'; 
import { CreateFilmCastDto } from 'src/dto/create-film-casts.dto'; 
import { UpdateFilmCastDto } from 'src/dto/update-film-casts.dto'; 

@Controller('film_casts')
export class FilmCastsController {
  constructor(private readonly filmCastsService: FilmCastsService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.filmCastsService.findOne(+id);
  }

  @Get() 
    async findByFilmId(@Query('film_id') filmId: string) {

        return this.filmCastsService.findByFilmId(+filmId);
    }
  @Post()
  async create(@Body() createFilmCastDto: CreateFilmCastDto) {
    return this.filmCastsService.create(createFilmCastDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateFilmCastDto: UpdateFilmCastDto) {
    return this.filmCastsService.update(+id, updateFilmCastDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.filmCastsService.remove(+id);
  }
}
