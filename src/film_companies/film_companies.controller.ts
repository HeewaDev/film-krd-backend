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
    return this.filmCompaniesService.create(createFilmCompanyDto);
  }

 

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateFilmCompanyDto: UpdateFilmCompanyDto,
  ) {
    return this.filmCompaniesService.update(id, updateFilmCompanyDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.filmCompaniesService.delete(id);
  }

}



    




  // @Post()
  // async create(@Body() createFilmCompaniesDto: CreateFilmCompaniesDto): Promise<FilmCompany> {
  //   return this.filmCompaniesService.create(createFilmCompaniesDto);
  // }

  // @Put(':id')
  // async update(@Param('id') id: string, @Body() updateFilmCompaniesDto: CreateFilmCompaniesDto): Promise<FilmCompany> {
  //   return this.filmCompaniesService.update(+id, updateFilmCompaniesDto);
  // }

  // @Delete(':id')
  // async remove(@Param('id') id: string): Promise<void> {
  //   return this.filmCompaniesService.remove(+id);
  // }
