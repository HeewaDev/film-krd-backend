import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { FilmCompaniesService } from './film_companies.service';
import { FilmCompany } from './film_companies.entity';

@Controller('film_companies')
export class FilmCompaniesController {
  constructor(private readonly filmCompaniesService: FilmCompaniesService) {}
  
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.filmCompaniesService.findOne(+id);
  }

  @Get()
  async findByFilmId(@Query('film_id') filmId: string) {
    console.log('Backend Searching for companies with film ID:', filmId);
    
    return this.filmCompaniesService.findByFilmId(+filmId);
  
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
