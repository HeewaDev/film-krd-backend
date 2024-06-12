import { Test, TestingModule } from '@nestjs/testing';
import { FilmCrewController } from './film_crew.controller';

describe('FilmCrewController', () => {
  let controller: FilmCrewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmCrewController],
    }).compile();

    controller = module.get<FilmCrewController>(FilmCrewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
