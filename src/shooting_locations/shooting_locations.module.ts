import { Module } from '@nestjs/common';
import { ShootingLocationsService } from './shooting_locations.service';
import { ShootingLocationsController } from './shooting_locations.controller';

@Module({
  providers: [ShootingLocationsService],
  controllers: [ShootingLocationsController]
})
export class ShootingLocationsModule {}
