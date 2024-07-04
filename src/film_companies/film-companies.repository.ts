import { Injectable, NotFoundException } from '@nestjs/common';
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

    if (error) throw error;

    return data;
  }

  async getFilmCompanies () {
    const {data, error} = await this.supabaseService
    .getClient()
    .from('film_companies')
    .select('*')

    if (error) throw error;

        return data;

    }
  
    async addCompanyToFilm(film_id: number, company_id: number) {
      const { data, error } = await this.supabaseService
        .getClient()
        .from('film_companies')
        .insert({ film_id, company_id });
  
      if (error) throw error;
  
      return data;
    }
  
    async getCompaniesByFilmId(film_id: number) {
      const { data, error } = await this.supabaseService
        .getClient()
        .from('film_companies')
        .select('*')
        .eq('film_id', film_id);
  
      if (error) throw error;
  
      return data;
    }
  
    async updateCompanyInFilm(film_id: number, company_id: number, new_company_id: number) {
      
      const { data, error } = await this.supabaseService
        .getClient()
        .from('film_companies')
        .update({ company_id: new_company_id })
        .eq('film_id', film_id)
        .eq('company_id', company_id);
  
      if (error) throw error;
  
      return data;
    }

  
    async removeCompanyFromFilm(film_id: number, company_id: number) {
      const { data, error } = await this.supabaseService
        .getClient()
        .from('film_companies')
        .delete()
        .eq('film_id', film_id)
        .eq('company_id', company_id);
  
      if (error) throw error;
  
      return data;
    }


  async findByFilmId(film_id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('film_companies')
      .select('*')
      .eq('film_id', film_id);

    if (error) throw error;

    return data;
  }



}
  

  // async update(id: number, updateFilmCompaniesDto: UpdateFilmCompaniesDto) {
  //   const { data, error } = await this.supabaseService
  //     .getClient()
  //     .from('film_companies')
  //     .update(updateFilmCompaniesDto)
  //     .eq('id', id);

  //   if (error) throw error;

  //   return data;
  // }

  // async remove(id: number) {
  //   const { data, error } = await this.supabaseService
  //     .getClient()
  //     .from('film_companies')
  //     .delete()
  //     .eq('id', id);

  //   if (error) throw error;

  //   return data;
  // }


  

  
