import { Module } from '@nestjs/common';
import { CrewController } from './crew.controller';
import { CrewRepository } from './crew.repository';
import { SupabaseService } from 'src/service/supabase.service';
import { CrewService } from './crew.service';

@Module({
  controllers: [CrewController],
  providers: [ SupabaseService, CrewService, CrewRepository],
 exports: [CrewRepository]
  
})
export class CrewModule {}
