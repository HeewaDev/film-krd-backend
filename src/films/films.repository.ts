import { Injectable } from "@nestjs/common";
import { CreateFilmDto } from "src/dto/create-film.dto";
import { UpdateFilmsDto } from "src/dto/update-film.dto";
import { SupabaseService } from "src/service/supabase.service";

@Injectable()
export class FilmsRepository {
    constructor(private readonly supabaseService: SupabaseService) {}

    async getAll() {
        const { data, error } = await this.supabaseService
            .getClient()
            .from('films')
            .select('*');

        if (error) throw error;

        return data;
    }

    async getById(id: number) {
        const { data, error } = await this.supabaseService
            .getClient()
            .from('films')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;

        return data;
    }

    async create(createFilmDto: CreateFilmDto) {
        const { data, error } = await this.supabaseService
            .getClient()
            .from('films')
            .insert(createFilmDto);

        if (error) throw error;

        return data;
    }

    async update(id: number, updateFilmsDto: UpdateFilmsDto) {
        const { data, error } = await this.supabaseService
            .getClient()
            .from('films')
            .update(updateFilmsDto)
            .eq('id', id);

        if (error) throw error;

        return data;
    }

    async delete(id: number) {
        const { data, error } = await this.supabaseService
            .getClient()
            .from('films')
            .delete()
            .eq('id', id);

        if (error) throw error;

        return data;
    }
    async searchFilms(query: string) {
        const { data, error } = await this.supabaseService
          .getClient()
          .from('films')
          .select('*')
          .textSearch('title, genre', query);
    
        if (error) throw error;
    
        return data; 
    
    }
    
    
    
}
