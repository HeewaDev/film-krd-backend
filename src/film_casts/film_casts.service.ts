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

  async create(createFilmCastDto: CreateFilmCastDto) {
    return this.filmCastsRepository.create(createFilmCastDto);
  }

  async update(id: number, updateFilmCastDto: UpdateFilmCastDto) {
    return this.filmCastsRepository.update(id, updateFilmCastDto);
  }

  async remove(id: number) {
    return this.filmCastsRepository.remove(id);
  }
  async findByFilmId(filmId: number) {
    return this.filmCastsRepository.findByFilmId(filmId);
  }
}
