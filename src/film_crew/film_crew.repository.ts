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
        .eq('id', id)
        .single();

        if (error) throw error;

      return data;
    } 
  
    async addCrewToFilm(film_id: number, crew_id: number) {  // you can add a crew to a film
      const { data, error } = await this.supabaseService
        .getClient()
        .from('film_crew')
        .insert({ film_id, crew_id });
  
      if (error) throw error;
  
      return data;
    }
  
    async getCrewByFilmId(film_id: number) {
      const { data, error } = await this.supabaseService
        .getClient()
        .from('film_crew')
        .select('*')
        .eq('film_id', film_id);
  
      if (error) throw error;
  
      return data;
    }
  
    async updateCrewInFilm(film_id: number, crew_id: number, new_crew_id: number) { // you can update a crew in a film
      const { data, error } = await this.supabaseService
        .getClient()
        .from('film_crew')
        .update({ crew_id: new_crew_id })
        .eq('film_id', film_id)
        .eq('crew_id', crew_id);
  
      if (error) throw error;
  
      return data;
    }
  
    async removeCrewFromFilm(film_id: number, crew_id: number) { // you can remove a crew from a film
      const { data, error } = await this.supabaseService
        .getClient()
        .from('film_crew')
        .delete()
        .eq('film_id', film_id)
        .eq('crew_id', crew_id);
  
      if (error) throw error;
  
      return data;
    }
}
