import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { SupabaseService } from 'src/service/supabase.service'; // Ensure correct path to SupabaseService

@Module({
  providers: [SearchService, SupabaseService], // Remove SupabaseClient from providers
  controllers: [SearchController],
  exports: [SupabaseService], // Optionally, export SupabaseService if needed in other modules
})
export class SearchModule {}
