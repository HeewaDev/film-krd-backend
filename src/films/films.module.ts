import { Global, Module } from '@nestjs/common';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { FilmsRepository } from './films.repository';
import {SupabaseService} from '../../src/service/supabase.service'
@Global()
@Module({
  controllers: [FilmsController],
  providers: [FilmsService, FilmsRepository, SupabaseService],
  exports: [FilmsService, FilmsRepository, SupabaseService] // Export only the necessary providers
})
export class FilmsModule {}
