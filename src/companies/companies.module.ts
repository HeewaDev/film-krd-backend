import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { SupabaseService } from 'src/service/supabase.service';

@Module({
  providers: [CompaniesService, SupabaseService],
  controllers: [CompaniesController]
})
export class CompaniesModule {}
