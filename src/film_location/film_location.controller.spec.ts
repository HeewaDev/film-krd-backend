import { Test, TestingModule } from '@nestjs/testing';
import { FilmLocationController } from './film_location.controller';

describe('FilmLocationController', () => {
  let controller: FilmLocationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmLocationController],
    }).compile();

    controller = module.get<FilmLocationController>(FilmLocationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
