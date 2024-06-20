import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { Observable } from 'rxjs';

interface FilmsService {
  GetAll(data: {}): Observable<any>;
  GetFilmsById(data: { id: number }): Observable<any>;
  CreateFilm(data: any): Observable<any>;
  UpdateFilm(data: any): Observable<any>;
  DeleteFilm(data: { id: number }): Observable<any>;
}

@Injectable()
export class FilmsClientService implements OnModuleInit {
  @Client({
    transport: Transport.GRPC,
    options: {
      package: 'films',
      protoPath: join(__dirname, '../proto/films.proto'),
      url: 'grpc://localhost:50051', // Ensure this is the correct URL and port for the microservice
    },
  })
  private client: ClientGrpc;

  private filmsService: FilmsService;

  onModuleInit() {
    this.filmsService = this.client.getService<FilmsService>('FilmsService');
  }

  getAllFilms() {
    return this.filmsService.GetAll({});
  }

  getFilmById(id: number) {
    return this.filmsService.GetFilmsById({ id });
  }

  createFilm(createFilmDto: any) {
    return this.filmsService.CreateFilm(createFilmDto);
  }

  updateFilm(updateFilmDto: any) {
    return this.filmsService.UpdateFilm(updateFilmDto);
  }

  deleteFilm(id: number) {
    return this.filmsService.DeleteFilm({ id });
  }
}
