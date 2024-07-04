// film-casts.controller.ts

import { Controller, Get, Post, Put, Delete, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { FilmCastsService } from './film_casts.service';
import { CreateFilmCastDto } from 'src/dto/create-film-casts.dto';
import { UpdateFilmCastDto } from 'src/dto/update-film-casts.dto';

@Controller('film_casts')
export class FilmCastsController {
    constructor(private readonly filmCastsService: FilmCastsService) { }



    @Get(':film_id')
    async findByFilmId(@Param('film_id', ParseIntPipe) filmId: string) {

        return this.filmCastsService.findByFilmId(+filmId);
    }
    @Post()
    async create(@Body() createFilmCastDto: CreateFilmCastDto) {
        return this.filmCastsService.create(createFilmCastDto);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) film_id: number, @Param('id', ParseIntPipe) cast_id: number, @Body() updateFilmCastDto: UpdateFilmCastDto) {
        return this.filmCastsService.update(film_id, cast_id, updateFilmCastDto);
    }

    @Delete(':id')
    async remove(@Param('id') film_id: number, @Param('cast_id') cast_id: number) {
        return this.filmCastsService.remove(film_id, cast_id);
    }

    @Get()
    async findAll() {
        return this.filmCastsService.findAll();
    }
}
