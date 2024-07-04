import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/service/supabase.service';
import { CreateFilmCastDto } from 'src/dto/create-film-casts.dto';
import { UpdateFilmCastDto } from 'src/dto/update-film-casts.dto'; 

@Injectable()
export class FilmCastsRepository {
  constructor(private readonly supabaseService: SupabaseService) {}

  async findAll() {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('film_casts')
      .select('*');

    if (error) throw error;

    return data;
  }

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

  async update(film_id: number, cast_id: number, updateFilmCastDto: UpdateFilmCastDto) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('film_casts')
      .update(updateFilmCastDto)
      .eq('film_id', film_id)
      .eq('cast_id', cast_id);

    if (error) throw error;

    return data;
  }

  async remove(film_id: number, cast_id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('film_casts')
      .delete()
      .eq('film_id', film_id)
      .eq('cast_id', cast_id);

    if (error) throw error;

    return data;
  }

  
  async findByFilmId(film_id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('film_casts')
      .select('*')
      .eq('film_id', film_id);

    if (error) throw error;

    return data;
  }
}
  

