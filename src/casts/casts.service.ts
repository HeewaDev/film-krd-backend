import { Injectable } from '@nestjs/common';
import { CreateCastDto } from 'src/dto/create-casts.dto';
import { UpdateCastDto } from 'src/dto/update-casts.dto';
import { CastsRepository } from './casts.repository'; // Import the repository

@Injectable()
export class CastsService {
    constructor(private readonly castsRepository: CastsRepository) {} // Inject the repository

    async GetCasts() {
        return await this.castsRepository.findAll(); // Use repository method to fetch data
    }

    async FindCastById(id: number) {
        return await this.castsRepository.findById(id); // Use repository method to fetch data by ID
    }

    async CreateCasts(createCastDto: CreateCastDto) {
        return await this.castsRepository.create(createCastDto); // Use repository method to create data
    }

    async UpdateCast(id: number, updateCastDto: UpdateCastDto) {
        return await this.castsRepository.update(id, updateCastDto); // Use repository method to update data
    }

    async DeleteCast(id: number) {
        return await this.castsRepository.delete(id); // Use repository method to delete data
    }
}
