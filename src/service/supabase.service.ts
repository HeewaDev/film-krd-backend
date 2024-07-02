import { Global, Injectable } from "@nestjs/common";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
@Global()
export class SupabaseService {
    
    private supabase: SupabaseClient;

    constructor() {
        
        const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5eXZub3JiaWhjbWp6YnF6a21wIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMTIwMjU4OCwiZXhwIjoyMDI2Nzc4NTg4fQ.SzHt4qLbFEpfSP0s2tlF3pQupzJah_BhkXdIKVfHeEA`;
        console.log(supabaseKey)
        if (!supabaseKey) {
            throw new Error('Supabase secret key not found in environment variables (.env)');
        }
        
        this.supabase = createClient(
            'https://fyyvnorbihcmjzbqzkmp.supabase.co',
            supabaseKey,
        );
    }

    getClient(): SupabaseClient {
        return this.supabase;
    }
}
