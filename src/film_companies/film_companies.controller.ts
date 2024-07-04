// film-companies.controller.ts

import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, Query } from '@nestjs/common';
import { FilmCompaniesService } from './film_companies.service';
import { CreateFilmCompaniesDto } from 'src/dto/create-film-companies.dto';
import { UpdateFilmCompanyDto } from 'src/dto/update-film-companies.dto';

@Controller('film_companies')
export class FilmCompaniesController {
  constructor(private readonly filmCompaniesService: FilmCompaniesService) {}

  @Get()
  async findAll(@Query('film_id') filmId?: string) {
    if (filmId) {
      console.log('Retrieving companies for film ID:', filmId);
      return this.filmCompaniesService.findByFilmId(+filmId);
    } else {
      console.log('Retrieving all film companies');
      return this.filmCompaniesService.getFilmCompanies();
    }
  }


  @Post()
  async create(@Body() createFilmCompanyDto: CreateFilmCompaniesDto) {
    console.log('Creating a new film company');
    try {
      return await this.filmCompaniesService.create(createFilmCompanyDto);
    } catch (error) {
      console.error('Error creating film company:', error);
      throw new Error('Error creating film company');
    }
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateFilmCompanyDto: UpdateFilmCompanyDto) {
    console.log(`Updating film company with ID: ${id}`);
    try {
      return await this.filmCompaniesService.update(id, updateFilmCompanyDto);
    } catch (error) {
      console.error(`Error updating film company with ID ${id}:`, error);
      throw new Error('Error updating film company');
    }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    console.log(`Deleting film company with ID: ${id}`);
    try {
      return await this.filmCompaniesService.delete(id);
    } catch (error) {
      console.error(`Error deleting film company with ID ${id}:`, error);
      throw new Error('Error deleting film company');
    }
  }
}


