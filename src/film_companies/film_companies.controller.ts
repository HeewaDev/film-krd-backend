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
    console.log('Backend Searching for companies with film ID:', film_id); // localhost:7000/film_companies/1
    
    return this.filmCompaniesService.findByFilmId(film_id);
  
  }

  @Post(':id')
async addCompanyToFilm(@Body() createFilmCompaniesDto: CreateFilmCompaniesDto) { // you can add a company to a film localhost:7000/film_companies/1
  const { film_id, company_id } = createFilmCompaniesDto;
    return this.filmCompaniesService.addCompanyToFilm(film_id, company_id);
  }

 

  @Put(':id')
  async update(    
    @Param('id') film_id: number, company_id: number, new_company_id: number, // localhost:7000/film_companies/1
    @Body() updateFilmCompanyDto: UpdateFilmCompanyDto,
  ) {
    return this.filmCompaniesService.updateCompanyInFilm(updateFilmCompanyDto);
  }

  @Delete(':id') // localhost:7000/film_companies/1
  async delete(@Param('id') film_id: number, @Param('id') company_id: number){
    return this.filmCompaniesService.removeCompanyFromFilm( film_id, company_id);
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
