import { Module } from '@nestjs/common';
import { CastsService } from './casts.service';
import { CastsController } from './casts.controller';
import { SupabaseService } from 'src/service/supabase.service';
import { CastsRepository } from './casts.repository';


@Module({

  controllers: [CastsController],
  providers: [CastsService, SupabaseService, CastsRepository ],
})
export class CastsModule {}
