import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { SupabaseService } from 'src/service/supabase.service';
import { CompaniesRepository } from './companies.repository';

@Module({
  providers: [CompaniesService, SupabaseService, CompaniesRepository],
  controllers: [CompaniesController]
})
export class CompaniesModule {}
