import { Module } from '@nestjs/common';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { FilmsRepository } from './films.repository';
import { SupabaseService } from 'src/service/supabase.service';

import { MyElasticsearchModule } from 'src/elasticSearch.module';
import { MyElasticsearchService } from 'src/elasticSearch.service';


@Module({
  imports: [MyElasticsearchModule,],
  controllers: [FilmsController],
  providers: [FilmsService, FilmsRepository, SupabaseService, MyElasticsearchService]
})
export class FilmsModule {}
