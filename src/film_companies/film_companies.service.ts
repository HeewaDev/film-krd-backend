import { Injectable } from '@nestjs/common';
import { FilmCompaniesRepository } from './film-companies.repository';
import { CreateFilmCompaniesDto } from 'src/dto/create-film-companies.dto';
import { UpdateFilmCompanyDto } from 'src/dto/update-film-companies.dto';

@Injectable()
export class FilmCompaniesService {
  constructor(private readonly filmCompaniesRepository: FilmCompaniesRepository) {}

  async findOne(id: number) {
    return this.filmCompaniesRepository.findOne(id);
  }

  
  async addCompanyToFilm(film_id: number, company_id: number) {
    return this.filmCompaniesRepository.addCompanyToFilm(film_id, company_id);
  }


  async getCompaniesByFilmId(film_id: number) {
    return this.filmCompaniesRepository.getCompaniesByFilmId(film_id);
  }

  async updateCompanyInFilm(updateFilmCompanyDto: UpdateFilmCompanyDto) {
    const { film_id, company_id, new_company_id } = updateFilmCompanyDto;
    return this.filmCompaniesRepository.updateCompanyInFilm(film_id, company_id, new_company_id);
  }

  async removeCompanyFromFilm(film_id: number, company_id: number) {
    return this.filmCompaniesRepository.removeCompanyFromFilm(film_id, company_id);

  }

  



  async findByFilmId(film_id: number) {
    return this.filmCompaniesRepository.findByFilmId(film_id);
  }


  async getFilmCompanies() {
    return this.filmCompaniesRepository.getFilmCompanies();
  }




}
