import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
    private supabase: SupabaseClient;

    constructor() {
        const supabaseUrl = 'https://fyyvnorbihcmjzbqzkmp.supabase.co'; // Replace with your Supabase URL
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5eXZub3JiaWhjbWp6YnF6a21wIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMTIwMjU4OCwiZXhwIjoyMDI2Nzc4NTg4fQ.SzHt4qLbFEpfSP0s2tlF3pQupzJah_BhkXdIKVfHeEA'; // Replace with your Supabase key

        this.supabase = createClient(supabaseUrl, supabaseKey);
    }

    getClient(): SupabaseClient {
        return this.supabase;
    }
}
