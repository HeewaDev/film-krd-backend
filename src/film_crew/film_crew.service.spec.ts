import { Test, TestingModule } from '@nestjs/testing';
import { FilmCrewService } from './film_crew.service';

describe('FilmCrewService', () => {
  let service: FilmCrewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmCrewService],
    }).compile();

    service = module.get<FilmCrewService>(FilmCrewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
