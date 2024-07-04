// film-casts.service.ts

import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { FilmCastsRepository } from './film_casts.repository';
import { CreateFilmCastDto } from 'src/dto/create-film-casts.dto'; 
import { UpdateFilmCastDto } from 'src/dto/update-film-casts.dto'; 

@Injectable()
export class FilmCastsService {
  constructor(private readonly filmCastsRepository: FilmCastsRepository) {}

  async findOne(id: number) {
    try {
      const filmCast = await this.filmCastsRepository.findOne(id);
      if (!filmCast) throw new NotFoundException(`Film cast with ID ${id} not found`);
      return filmCast;
    } catch (error) {
      console.error(`Error finding film cast with ID ${id}:`, error);
      throw new InternalServerErrorException('Error finding film cast');
    }
  }

  async create(createFilmCastDto: CreateFilmCastDto) {
    try {
      return await this.filmCastsRepository.create(createFilmCastDto);
    } catch (error) {
      console.error('Error creating film cast:', error);
      throw new InternalServerErrorException('Error creating film cast');
    }
  }

  async update(id: number, updateFilmCastDto: UpdateFilmCastDto) {
    try {
      const updatedFilmCast = await this.filmCastsRepository.update(id, updateFilmCastDto);
      if (!updatedFilmCast) throw new NotFoundException(`Film cast with ID ${id} not found`);
      return updatedFilmCast;
    } catch (error) {
      console.error(`Error updating film cast with ID ${id}:`, error);
      throw new InternalServerErrorException('Error updating film cast');
    }
  }

  async remove(id: number) {
    try {
      const result = await this.filmCastsRepository.remove(id);
      if (!result) throw new NotFoundException(`Film cast with ID ${id} not found`);
      return result;
    } catch (error) {
      console.error(`Error deleting film cast with ID ${id}:`, error);
      throw new InternalServerErrorException('Error deleting film cast');
    }
  }

  async findByFilmId(filmId: number) {
    try {
      return await this.filmCastsRepository.findByFilmId(filmId);
    } catch (error) {
      console.error(`Error finding film casts by film ID ${filmId}:`, error);
      throw new InternalServerErrorException('Error finding film casts');
    }
  }
}
