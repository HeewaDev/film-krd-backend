import { Controller, Get, Post, Put, Delete, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { FilmCompaniesService } from './film_companies.service';
import { FilmCompany } from './film_companies.entity';
import { CreateFilmCompaniesDto } from 'src/dto/create-film-companies.dto';
import { UpdateFilmCompanyDto } from 'src/dto/update-film-companies.dto';

@Controller('film_companies')
export class FilmCompaniesController {
  constructor(private readonly filmCompaniesService: FilmCompaniesService) {}
  
  @Get()
  async findAll() {
    return this.filmCompaniesService.getFilmCompanies();
  }

  @Get(':film_id')
  async findByFilmId(@Param('film_id', ParseIntPipe) film_id: number) {
    console.log('Backend Searching for companies with film ID:', film_id); // This will log to the console
    
    return this.filmCompaniesService.findByFilmId(film_id);
  
  }


  @Post()
  async create(@Body() createFilmCompanyDto: CreateFilmCompaniesDto) {
    return this.filmCompaniesService.CreateFilm(createFilmCompanyDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateFilmCompanyDto: UpdateFilmCompanyDto,
  ) {
    return this.filmCompaniesService.UpdateFilm(id, updateFilmCompanyDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.filmCompaniesService.DeleteFilm(id);
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
