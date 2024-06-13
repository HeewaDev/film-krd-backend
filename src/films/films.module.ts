import { Module } from '@nestjs/common';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { FilmsRepository } from './films.repository';
import { SupabaseService } from 'src/service/supabase.service';

@Module({
  controllers: [FilmsController],
  providers: [FilmsService, FilmsRepository, SupabaseService]
})
export class FilmsModule {}
