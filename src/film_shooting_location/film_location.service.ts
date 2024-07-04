import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFilmShootingLocationDto } from 'src/dto/create-film_shooting_locationDto';
import { UpdateFilmShootingLocationDto } from 'src/dto/update-film_shooting_locationDto';
import { SupabaseService } from 'src/service/supabase.service';

@Injectable()
export class FilmLocationService {
    constructor(
        private readonly supabaseService: SupabaseService) {}

    async getFilmLocations() {
        const { data, error } = await this.supabaseService
            .getClient()
            .from('film_shooting_locations')
            .select('*');

        if (error) throw error;

        return data;
    }

    async getFilmLocationById(film_id: number) {
        const { data, error } = await this.supabaseService
            .getClient()
            .from('film_shooting_locations')
            .select('*')
            .eq('film_id', film_id)
            .single();

        if (error) throw error;

        return data;
    }


    async createFilmLocation(CreateFilmShootingLocationDto: CreateFilmShootingLocationDto) {
        const { data, error } = await this.supabaseService
            .getClient()
            .from('film_shooting_locations')
            .insert(CreateFilmShootingLocationDto);

        if (error) throw error;

        return data;
    }
    async update(id: number, shooting_location_id: number, updateFilmshootingLocationDto : UpdateFilmShootingLocationDto): Promise<any> {
        const supabase = this.supabaseService.getClient();
    
        if (updateFilmshootingLocationDto.film_id) {
          const { data: film, error: filmError } = await supabase
            .from('films')
            .select('*')
            .eq('film_id', updateFilmshootingLocationDto.film_id)
            .single();
    
          if (filmError || !film) {
            throw new NotFoundException(`Film with ID ${updateFilmshootingLocationDto.film_id} not found`);
          }
        }
    
        if (updateFilmshootingLocationDto.shooting_location_id) {
          const { data: company, error: companyError } = await supabase
            .from('shooting_locations')
            .select('*')
            .eq('shootin_location_id', updateFilmshootingLocationDto.shooting_location_id)
            .single();
    
          if (companyError || !company) {
            throw new NotFoundException(`Company with ID ${updateFilmshootingLocationDto.shooting_location_id} not found`);
          }
        }
    
        const { data: filmCompany, error: filmCompanyError } = await supabase
          .from('film_shooting_locations')
          .update(updateFilmshootingLocationDto)
          .eq('id', id);
    
        if (filmCompanyError) {
          throw new Error(filmCompanyError.message);
        }
    
        return filmCompany;
      }
    
      async delete(id: number): Promise<any> {
        const supabase = this.supabaseService.getClient();
    
        const { data: filmCompany, error: filmCompanyError } = await supabase
          .from('film_companies')
          .delete()
          .eq('id', id);
    
        if (filmCompanyError) {
          throw new Error(filmCompanyError.message);
        }
    
        return filmCompany;
      }


    async deleteFilmLocation(id: number) {
        const { data, error } = await this.supabaseService
            .getClient()
            .from('film_shooting_locations')
            .delete()
            .eq('id', id);

        if (error) throw error;

        return data;
    }




}
