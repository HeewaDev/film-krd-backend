import { Injectable } from '@nestjs/common';
import { CrewRepository } from './film_crew.repository';
import { CreateFilmCrewDto } from 'src/dto/create-filmCrew.dto';


@Injectable()
export class FilmCrewService {
    constructor(private readonly filmCrewRepository: CrewRepository){}

    async findCrewByFilm_id(id: number){
        return await this.filmCrewRepository.findCrewByFilm_id(id)
    }


    async findAllCrew(){
        return await this.filmCrewRepository.findAllCrew()
    }


    async addCrewToFilm(film_id: number, crew_id: number){
        return await this.filmCrewRepository.addCrewToFilm(film_id, crew_id)
    }



    async UpdateCrewInFilm(film_id: number, crew_id: number, new_crew_id: number){
        return await this.filmCrewRepository.updateCrewInFilm(film_id, crew_id, new_crew_id)
    }


    async removeCrewFromFilm(film_id: number, crew_id: number){
        return await this.filmCrewRepository.removeCrewFromFilm(film_id, crew_id)
    }

    
}
