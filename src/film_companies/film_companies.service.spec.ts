import { Test, TestingModule } from '@nestjs/testing';
import { FilmCompaniesService } from './film_companies.service';

describe('FilmCompaniesService', () => {
  let service: FilmCompaniesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmCompaniesService],
    }).compile();

    service = module.get<FilmCompaniesService>(FilmCompaniesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
