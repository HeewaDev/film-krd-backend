import { Test, TestingModule } from '@nestjs/testing';
import { FilmCompaniesController } from './film_companies.controller';

describe('FilmCompaniesController', () => {
  let controller: FilmCompaniesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmCompaniesController],
    }).compile();

    controller = module.get<FilmCompaniesController>(FilmCompaniesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
