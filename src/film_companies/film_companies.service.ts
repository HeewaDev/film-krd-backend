// film-companies.service.ts

import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { FilmCompaniesRepository } from './film-companies.repository';
import { CreateFilmCompaniesDto } from 'src/dto/create-film-companies.dto';
import { UpdateFilmCompanyDto } from 'src/dto/update-film-companies.dto';

@Injectable()
export class FilmCompaniesService {
  constructor(private readonly filmCompaniesRepository: FilmCompaniesRepository) {}

  async findOne(id: number) {
    try {
      const filmCompany = await this.filmCompaniesRepository.findOne(id);
      if (!filmCompany) throw new NotFoundException(`Film company with ID ${id} not found`);
      return filmCompany;
    } catch (error) {
      console.error(`Error finding film company with ID ${id}:`, error);
      throw new InternalServerErrorException('Error finding film company');
    }
  }

  async create(createFilmCompaniesDto: CreateFilmCompaniesDto) {
    try {
      return await this.filmCompaniesRepository.create(createFilmCompaniesDto);
    } catch (error) {
      console.error('Error creating film company:', error);
      throw new InternalServerErrorException('Error creating film company');
    }
  }

  async update(id: number, updateFilmCompaniesDto: UpdateFilmCompanyDto) {
    try {
      const updatedFilmCompany = await this.filmCompaniesRepository.update(id, updateFilmCompaniesDto);
      if (!updatedFilmCompany) throw new NotFoundException(`Film company with ID ${id} not found`);
      return updatedFilmCompany;
    } catch (error) {
      console.error(`Error updating film company with ID ${id}:`, error);
      throw new InternalServerErrorException('Error updating film company');
    }
  }

  async delete(id: number) {
    try {
      const result = await this.filmCompaniesRepository.delete(id);
      if (!result) throw new NotFoundException(`Film company with ID ${id} not found`);
      return result;
    } catch (error) {
      console.error(`Error deleting film company with ID ${id}:`, error);
      throw new InternalServerErrorException('Error deleting film company');
    }
  }

  async findByFilmId(filmId: number) {
    try {
      return await this.filmCompaniesRepository.findByFilmId(filmId);
    } catch (error) {
      console.error(`Error finding film companies by film ID ${filmId}:`, error);
      throw new InternalServerErrorException('Error finding film companies');
    }
  }

  async getFilmCompanies() {
    try {
      return await this.filmCompaniesRepository.getFilmCompanies();
    } catch (error) {
      console.error('Error retrieving film companies:', error);
      throw new InternalServerErrorException('Error retrieving film companies');
    }
  }
}
