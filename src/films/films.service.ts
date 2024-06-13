import { Injectable } from '@nestjs/common';
import { FilmsRepository } from './films.repository';
import { CreateFilmDto } from 'src/dto/create-film.dto';
import { UpdateFilmsDto } from 'src/dto/update-film.dto';

@Injectable()
export class FilmsService {

    constructor(private readonly filmsRepository: FilmsRepository){}


    async GetAll(){
        return await this.filmsRepository.GetAll()
    }


    async GetFilmsById(id: number){
        return await this.filmsRepository.getbyId(id)
    }

    async CreateFilm(createFilmDto: CreateFilmDto){
        return await this.filmsRepository.create(createFilmDto)
    }


    async UpdateFilm(id: number, updateFilmDto: UpdateFilmsDto){

        return await this.filmsRepository.update(id, updateFilmDto)
    
        }


    async DeleteFilm(id: number){
            return await this.filmsRepository.delete(id)
        }


        


}
