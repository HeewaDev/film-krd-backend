import { Test, TestingModule } from '@nestjs/testing';
import { FilmCastsController } from './film_casts.controller';

describe('FilmCastsController', () => {
  let controller: FilmCastsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmCastsController],
    }).compile();

    controller = module.get<FilmCastsController>(FilmCastsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
