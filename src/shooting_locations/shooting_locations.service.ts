import { Injectable } from '@nestjs/common';
import { ShootingLocationRepository } from './shooting-location.repository';
import { CreateShootingLocationsDto } from 'src/dto/create-shooting-location.dto';
import { UpdateShootingLocationsDto } from 'src/dto/update-shooting-location.dto';

@Injectable()
export class ShootingLocationsService {
    constructor(private readonly shootingLocationRepository: ShootingLocationRepository){}

    async GetAllShootingLocations() {
        return await this.shootingLocationRepository.getshootings()
    }

    async GetShootingLocationById(id: number){
        return await this.shootingLocationRepository.getshootingById(id)
    }

    async CreateShootingLocation(createShootingLocationsDto: CreateShootingLocationsDto){

        return await this.shootingLocationRepository.createShootingLocation(createShootingLocationsDto)
    }


    async updateShootingLocation(id:number, updateShootingLocationsDto: UpdateShootingLocationsDto){
        return await this.shootingLocationRepository.updateShootingLocation(id, updateShootingLocationsDto)
    }


    async deleteShootingLocation(id: number) {
        return await this.deleteShootingLocation(id)
    }
}
