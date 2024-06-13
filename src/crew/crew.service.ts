import { Injectable, NotFoundException } from '@nestjs/common';
import { CrewRepository } from './crew.repository';
import { CreateCrewDto } from 'src/dto/create-crew.dto';
import { UpdateCrewDto } from 'src/dto/update-crew.dto';

@Injectable()
export class CrewService {
    constructor(private readonly crewRepository: CrewRepository) {}
    

    async GetAllCrew(){
         return await this.crewRepository.getAll()
    }


    async GetCrewById(id: number){
        return await this.crewRepository.findById(id)

       
    }

    async CreateCrew(createCrewDto: CreateCrewDto){
        return await this.crewRepository.create(createCrewDto)
    }

    async UpdateCrew(id: number ,updateCrewDto: UpdateCrewDto){
        return await this.crewRepository.update(id, updateCrewDto)
    }

    async DeleteCrew(id: number){
        return await this.crewRepository.delete(id)
    }
}


