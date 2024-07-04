import { Test, TestingModule } from '@nestjs/testing';
import { FilmLocationService } from './film_location.service';

describe('FilmLocationService', () => {
  let service: FilmLocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmLocationService],
    }).compile();

    service = module.get<FilmLocationService>(FilmLocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
