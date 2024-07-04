// film-companies.repository.ts

import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { SupabaseService } from 'src/service/supabase.service';
import { CreateFilmCompaniesDto } from 'src/dto/create-film-companies.dto';
import { UpdateFilmCompanyDto } from 'src/dto/update-film-companies.dto';

@Injectable()
export class FilmCompaniesRepository {
  constructor(private readonly supabaseService: SupabaseService) {}

  async findOne(id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('film_companies')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error(`Error finding film company with ID ${id}:`, error);
      throw new InternalServerErrorException('Error finding film company');
    }

    return data;
  }

  async getFilmCompanies() {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('film_companies')
      .select('*');

    if (error) {
      console.error('Error retrieving film companies:', error);
      throw new InternalServerErrorException('Error retrieving film companies');
    }

    return data;
  }

  async create(createFilmCompaniesDto: CreateFilmCompaniesDto) {
    const { film_id, company_id } = createFilmCompaniesDto;
    const supabase = this.supabaseService.getClient();

    // Validate film
    const { data: film, error: filmError } = await supabase
      .from('films')
      .select('*')
      .eq('id', film_id)
      .single();
    if (filmError || !film) {
      console.error(`Film with ID ${film_id} not found:`, filmError);
      throw new NotFoundException(`Film with ID ${film_id} not found`);
    }

    // Validate company
    const { data: company, error: companyError } = await supabase
      .from('companies')
      .select('*')
      .eq('id', company_id)
      .single();
    if (companyError || !company) {
      console.error(`Company with ID ${company_id} not found:`, companyError);
      throw new NotFoundException(`Company with ID ${company_id} not found`);
    }

    // Insert film_company
    const { data: filmCompany, error: filmCompanyError } = await supabase
      .from('film_companies')
      .insert({ film_id, company_id })
      .single();

    if (filmCompanyError) {
      console.error('Error creating film company:', filmCompanyError);
      throw new InternalServerErrorException('Error creating film company');
    }

    return filmCompany;
  }

  async update(id: number, updateFilmCompanyDto: UpdateFilmCompanyDto) {
    const supabase = this.supabaseService.getClient();

    // Validate if the film exists (if being updated)
    if (updateFilmCompanyDto.film_id) {
      const { data: film, error: filmError } = await supabase
        .from('films')
        .select('*')
        .eq('id', updateFilmCompanyDto.film_id)
        .single();
      if (filmError || !film) {
        console.error(`Film with ID ${updateFilmCompanyDto.film_id} not found:`, filmError);
        throw new NotFoundException(`Film with ID ${updateFilmCompanyDto.film_id} not found`);
      }
    }

    // Validate if the company exists (if being updated)
    if (updateFilmCompanyDto.company_id) {
      const { data: company, error: companyError } = await supabase
        .from('companies')
        .select('*')
        .eq('id', updateFilmCompanyDto.company_id)
        .single();
      if (companyError || !company) {
        console.error(`Company with ID ${updateFilmCompanyDto.company_id} not found:`, companyError);
        throw new NotFoundException(`Company with ID ${updateFilmCompanyDto.company_id} not found`);
      }
    }

    // Update film_company
    const { data, error } = await supabase
      .from('film_companies')
      .update(updateFilmCompanyDto)
      .eq('id', id)
      .single();

    if (error) {
      console.error(`Error updating film company with ID ${id}:`, error);
      throw new InternalServerErrorException('Error updating film company');
    }

    return data;
  }

  async delete(id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('film_companies')
      .delete()
      .eq('id', id)
      .single();

    if (error) {
      console.error(`Error deleting film company with ID ${id}:`, error);
      throw new InternalServerErrorException('Error deleting film company');
    }

    return data;
  }

  async findByFilmId(film_id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('film_companies')
      .select('*')
      .eq('film_id', film_id);

    if (error) {
      console.error(`Error finding film companies by film ID ${film_id}:`, error);
      throw new InternalServerErrorException('Error finding film companies');
    }

    return data;
  }
}
