import { Test, TestingModule } from '@nestjs/testing';
import { ShootingLocationsController } from './shooting_locations.controller';

describe('ShootingLocationsController', () => {
  let controller: ShootingLocationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShootingLocationsController],
    }).compile();

    controller = module.get<ShootingLocationsController>(ShootingLocationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
