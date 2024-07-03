import { Injectable } from '@nestjs/common';
import { FilmCompaniesRepository } from './film-companies.repository';
import { CreateFilmCompaniesDto } from 'src/dto/create-film-companies.dto';
import { UpdateFilmCompaniesDto } from 'src/dto/update-film-companies.dto';

@Injectable()
export class FilmCompaniesService {
  constructor(private readonly filmCompaniesRepository: FilmCompaniesRepository) {}

  async findOne(id: number) {
    return this.filmCompaniesRepository.findOne(id);
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
  async findByFilmId(filmId: number) {
    return this.filmCompaniesRepository.findByFilmId(filmId);
  }


}
