import { Injectable } from '@nestjs/common';
import { CrewRepository } from './film_crew.repository';

@Injectable()
export class FilmCrewService {
    constructor(private readonly filmCrewRepository: CrewRepository){}

    async findCrewByFilm_id(id: number){
        return await this.filmCrewRepository.findCrewByFilm_id(id)
    }


    async findAllCrew(){
        return await this.filmCrewRepository.findAllCrew()
    }
}
