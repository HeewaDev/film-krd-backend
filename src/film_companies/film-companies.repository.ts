import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/service/supabase.service';
import { CreateFilmCompaniesDto } from 'src/dto/create-film-companies.dto';
import { UpdateFilmCompaniesDto } from 'src/dto/update-film-companies.dto';

@Injectable()
export class FilmCrewRepository {
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
  

  // async create(createFilmCompaniesDto: CreateFilmCompaniesDto) {
  //   const { data, error } = await this.supabaseService
  //     .getClient()
  //     .from('film_companies')
  //     .insert(createFilmCompaniesDto);

  //   if (error) throw error;

  //   return data;
  // }

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


  async findByFilmId(filmId: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('film_companies')
      .select('*')
      .eq('film_id', filmId);

    if (error) throw error;

    return data;
  }
}
  
