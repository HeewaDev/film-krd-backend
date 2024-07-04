// film-casts.controller.ts

import { Controller, Get, Post, Put, Delete, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { FilmCastsService } from './film_casts.service'; 
import { CreateFilmCastDto } from 'src/dto/create-film-casts.dto'; 
import { UpdateFilmCastDto } from 'src/dto/update-film-casts.dto'; 

@Controller('film_casts')
export class FilmCastsController {
  constructor(private readonly filmCastsService: FilmCastsService) {}

  @Get()
  async findByFilmId(@Query('film_id', ParseIntPipe) filmId: number) {
    console.log(`Searching for casts with film ID: ${filmId}`);
    try {
      return await this.filmCastsService.findByFilmId(filmId);
    } catch (error) {
      console.error('Error finding film casts:', error);
      throw new Error('Error finding film casts');
    }
  }

  @Post()
  async create(@Body() createFilmCastDto: CreateFilmCastDto) {
    try {
      return await this.filmCastsService.create(createFilmCastDto);
    } catch (error) {
      console.error('Error creating film cast:', error);
      throw new Error('Error creating film cast');
    }
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateFilmCastDto: UpdateFilmCastDto) {
    try {
      return await this.filmCastsService.update(id, updateFilmCastDto);
    } catch (error) {
      console.error(`Error updating film cast with ID ${id}:`, error);
      throw new Error('Error updating film cast');
    }
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.filmCastsService.remove(id);
    } catch (error) {
      console.error(`Error deleting film cast with ID ${id}:`, error);
      throw new Error('Error deleting film cast');
    }
  }
}
