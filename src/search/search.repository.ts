import { Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { SupabaseService } from 'src/service/supabase.service'; // Adjust import path based on your project structure

@Injectable()
export class FilmsSearchRepository {
    private readonly supabaseClient: SupabaseClient;

    constructor(private readonly supabaseService: SupabaseService) {
        this.supabaseClient = this.supabaseService.getClient();
    }

    async findFilms(title: string, genre: string, keywords: string) {
        let query = this.supabaseClient.from('films').select('*');

        if (title) {
            const pattern = this.createRegexPattern(title);
            query = query.ilike('title', pattern);
        }

        if (genre) {
            query = query.contains('genre', [genre]);
        }

        if (keywords) {
            query = query.contains('keywords', [keywords]);
        }

        const { data, error } = await query;

        if (error) {
            throw new Error(error.message);
        }

        return data;
    }

    private createRegexPattern(input: string): string {
        return `%${input.split('').join('%')}%`;
    }
}
