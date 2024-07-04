// film-casts.service.ts

import { Injectable } from '@nestjs/common';
import { FilmCastsRepository } from './film_casts.repository';
import { CreateFilmCastDto } from 'src/dto/create-film-casts.dto'; 
import { UpdateFilmCastDto } from 'src/dto/update-film-casts.dto'; 

@Injectable()
export class FilmCastsService {
  constructor(private readonly filmCastsRepository: FilmCastsRepository) {}

  async findOne(id: number) {
    return this.filmCastsRepository.findOne(id);
  }

  async findAll() {
    return this.filmCastsRepository.findAll();
  }

  async create(createFilmCastDto: CreateFilmCastDto) {
    return this.filmCastsRepository.create(createFilmCastDto);
  }

  async update(film_id: number, cast_id: number, updateFilmCastDto: UpdateFilmCastDto) {
    return this.filmCastsRepository.update(film_id, cast_id, updateFilmCastDto);
  }

  async remove(film_id: number, cast_id: number) {
    return this.filmCastsRepository.remove(film_id, cast_id);
  }
  async findByFilmId(filmId: number) {
    return this.filmCastsRepository.findByFilmId(filmId);
  }
}
