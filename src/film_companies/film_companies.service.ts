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

  async CreateFilm(createFilmCompaniesDto: CreateFilmCompaniesDto) {
    return this.filmCompaniesRepository.create(createFilmCompaniesDto);
  }


  async UpdateFilm(id: number, updateFilmCompaniesDto: UpdateFilmCompanyDto) {
    return this.filmCompaniesRepository.update(id, updateFilmCompaniesDto);
  }


  async DeleteFilm(id: number) {
    return this.filmCompaniesRepository.delete(id);
  }
  // async create(createFilmCompaniesDto: CreateFilmCompaniesDto) {
  //   return this.filmCompaniesRepository.create(createFilmCompaniesDto);
  // }

  // async update(id: number, updateFilmCompaniesDto: UpdateFilmCompaniesDto) {
  //   return this.filmCompaniesRepository.update(id, updateFilmCompaniesDto);
  // }

  // async remove(id: number) {
  //   return this.filmCompaniesRepository.remove(id);
  // }
  async findByFilmId(film_id: number) {
    return this.filmCompaniesRepository.findByFilmId(film_id);
  }


  async getFilmCompanies() {
    return this.filmCompaniesRepository.getFilmCompanies();
  }




}
