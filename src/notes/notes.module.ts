import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { SupabaseService } from 'src/service/supabase.service';
import { NotesRepository } from './notes.repository';

@Module({
  controllers: [NotesController],
  providers: [NotesService, NotesService, SupabaseService, NotesRepository]
})
export class NotesModule {}
