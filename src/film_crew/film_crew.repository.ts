import { Injectable } from '@nestjs/common';
import { CreateCrewDto } from 'src/dto/create-crew.dto';
import { UpdateCrewDto } from 'src/dto/update-crew.dto';
import { SupabaseService } from 'src/service/supabase.service';

@Injectable()
export class CrewRepository {
  constructor(
    private readonly supabaseService: SupabaseService) {}

  async findAllCrew() {
   const { data, error } = await this.supabaseService
        .getClient()
        .from('film_crew')
        .select('*');

        if (error) throw error;

      

      return data;
    } 
  

  async findCrewByFilm_id(id: number) {
      const { data, error } = await this.supabaseService
        .getClient()
        .from('film_crew')
        .select('*')
        .eq('film_id', id)

        if (error) throw error;

      return data;
    } 
  

  async create(createCrewDto: CreateCrewDto) {
    try {
      const { data, error } = await this.supabaseService
        .getClient()
        .from('film_crew')
        .insert(createCrewDto);

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      throw new Error('Failed to create film crew');
    }
  }

  async update(id: number, updateCrewDto: UpdateCrewDto) {
    try {
      const { data, error } = await this.supabaseService
        .getClient()
        .from('film_crew')
        .update(updateCrewDto)
        .eq('id', id);

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      throw new Error('Failed to update film crew');
    }
  }

  async delete(id: number) {
    try {
      const { error } = await this.supabaseService
        .getClient()
        .from('film_crew')
        .delete()
        .eq('id', id);

      if (error) {
        throw new Error(error.message);
      }

      return { success: true };
    } catch (error) {
      throw new Error('Failed to delete film crew');
    }
  }
}
