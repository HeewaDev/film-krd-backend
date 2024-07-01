import { Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { SupabaseService } from 'src/service/supabase.service'; // Adjust import path based on your project structure

@Injectable()
export class SearchService {
    private readonly supabaseClient: SupabaseClient;

    constructor(private readonly supabaseService: SupabaseService) {
        this.supabaseClient = this.supabaseService.getClient();
    }

    private createRegexPattern(input: string): string {
        // Create a regex pattern that allows for slight misspellings 
        return `%${input.split('').join('%')}%`;
    }

    async searchAll(queryParams: any) {
        const { title, genre, keywords, name, type, description, profession } = queryParams;
        let data = [];

        if (title) {
            const films = await this.searchFilmsByTitle(title);
            data = data.concat(films);
        }

        if (name) {
            const casts = await this.searchCasts(name);
            data = data.concat(casts);
        }

        if (name) {
            const companies = await this.searchCompanies(name, type, description);
            data = data.concat(companies);
        }

        if (name) {
            const crew = await this.searchCrew(name, profession);
            data = data.concat(crew);
        }

        return data;
    }

    async searchFilmsByTitle(title: string) {
        let query = this.supabaseClient.from('films').select('*').ilike('title', `%${title}%`);

        const { data, error } = await query;

        if (error) {
            throw new Error(error.message);
        }

        return data;
    }

    async searchCasts(name: string) {
        let query = this.supabaseClient.from('casts').select('*');

        if (name) {
            const pattern = this.createRegexPattern(name);
            query = query.ilike('name', pattern);
        }

        const { data, error } = await query;

        if (error) {
            throw new Error(error.message);
        }

        return data;
    }

    async searchCompanies(name: string, type: string, description: string) {
        let query = this.supabaseClient.from('companies').select('*');

        if (name) {
            const pattern = this.createRegexPattern(name);
            query = query.ilike('name', pattern);
        }

        if (type) {
            query = query.ilike('type', `%${type}%`);
        }

        if (description) {
            query = query.ilike('description', `%${description}%`);
        }

        const { data, error } = await query;

        if (error) {
            throw new Error(error.message);
        }

        return data;
    }

    async searchCrew(name: string, profession: string) {
        let query = this.supabaseClient.from('crew').select('*');

        if (name) {
            const pattern = this.createRegexPattern(name);
            query = query.ilike('name', pattern);
        }

        if (profession) {
            query = query.ilike('profession', `%${profession}%`);
        }

        const { data, error } = await query;

        if (error) {
            throw new Error(error.message);
        }

        return data;
    }
}
