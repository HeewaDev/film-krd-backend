import { Test, TestingModule } from '@nestjs/testing';
import { FilmCastsService } from './film_casts.service';

describe('FilmCastsService', () => {
  let service: FilmCastsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmCastsService],
    }).compile();

    service = module.get<FilmCastsService>(FilmCastsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
