import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupabaseService } from './service/supabase.service';
import { CastsModule } from './casts/casts.module';
import { CompaniesModule } from './companies/companies.module';
import { CrewService } from './crew/crew.service';
import { CrewModule } from './crew/crew.module';
import { FilmCastsModule } from './film_casts/film_casts.module';
import { FilmCrewModule } from './film_crew/film_crew.module';
import { FilmCompaniesModule } from './film_companies/film_companies.module';
import { FilmLocationModule } from './film_location/film_location.module';
import { FilmsModule } from './films/films.module';
import { NotesModule } from './notes/notes.module';
import { ShootingLocationsModule } from './shooting_locations/shooting_locations.module';
import { SupabaseModule } from './service/supabase.module';

@Module({
  imports: [CastsModule,  CompaniesModule, CrewModule, FilmCastsModule, FilmCrewModule, FilmCompaniesModule, FilmLocationModule, FilmsModule, NotesModule, ShootingLocationsModule, SupabaseModule],
  controllers: [AppController],
  providers: [AppService, SupabaseService, CrewService],
})
export class AppModule {}
