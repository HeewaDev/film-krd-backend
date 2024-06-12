import { Test, TestingModule } from '@nestjs/testing';
import { ShootingLocationsService } from './shooting_locations.service';

describe('ShootingLocationsService', () => {
  let service: ShootingLocationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShootingLocationsService],
    }).compile();

    service = module.get<ShootingLocationsService>(ShootingLocationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
