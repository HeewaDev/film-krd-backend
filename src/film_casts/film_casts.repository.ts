// film-casts.repository.ts

import { Injectable, InternalServerErrorException } from '@nestjs/common';
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

    if (error) {
      console.error(`Error finding film cast with ID ${id}:`, error);
      throw new InternalServerErrorException('Error finding film cast');
    }

    return data;
  }

  async create(createFilmCastDto: CreateFilmCastDto) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('film_casts')
      .insert(createFilmCastDto)
      .single();

    if (error) {
      console.error('Error creating film cast:', error);
      throw new InternalServerErrorException('Error creating film cast');
    }

    return data;
  }

  async update(id: number, updateFilmCastDto: UpdateFilmCastDto) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('film_casts')
      .update(updateFilmCastDto)
      .eq('id', id)
      .single();

    if (error) {
      console.error(`Error updating film cast with ID ${id}:`, error);
      throw new InternalServerErrorException('Error updating film cast');
    }

    return data;
  }

  async remove(id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('film_casts')
      .delete()
      .eq('id', id)
      .single();

    if (error) {
      console.error(`Error deleting film cast with ID ${id}:`, error);
      throw new InternalServerErrorException('Error deleting film cast');
    }

    return data;
  }

  async findByFilmId(filmId: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('film_casts')
      .select('*')
      .eq('film_id', filmId);

    if (error) {
      console.error(`Error finding film casts by film ID ${filmId}:`, error);
      throw new InternalServerErrorException('Error finding film casts');
    }

    return data;
  }
}
