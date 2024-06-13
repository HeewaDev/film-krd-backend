import { Module } from '@nestjs/common';
import { ShootingLocationsService } from './shooting_locations.service';
import { ShootingLocationsController } from './shooting_locations.controller';
import { SupabaseService } from 'src/service/supabase.service';
import { ShootingLocationRepository } from './shooting-location.repository';

@Module({
  providers: [ShootingLocationsService , SupabaseService, ShootingLocationRepository],
  controllers: [ShootingLocationsController]
})
export class ShootingLocationsModule {}
