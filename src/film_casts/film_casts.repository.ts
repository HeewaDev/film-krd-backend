// film-casts.repository.ts

import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/service/supabase.service';
import { CreateFilmCastDto } from 'src/dto/create-film-casts.dto';
import { UpdateFilmCastDto } from 'src/dto/update-film-casts.dto'; 

@Injectable()
export class FilmCastsRepository {
  constructor(private readonly supabaseService: SupabaseService) {}

  async findOne(id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('film_casts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;

    return data;
  }

  async create(createFilmCastDto: CreateFilmCastDto) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('film_casts')
      .insert(createFilmCastDto);

    if (error) throw error;

    return data;
  }

  async update(id: number, updateFilmCastDto: UpdateFilmCastDto) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('film_casts')
      .update(updateFilmCastDto)
      .eq('id', id);

    if (error) throw error;

    return data;
  }

  async remove(id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('film_casts')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return data;
  }


  async findByFilmId(filmId: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('film_casts')
      .select('*')
      .eq('film_id', filmId);

    if (error) throw error;

    return data;
  }
  
}
