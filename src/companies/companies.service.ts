import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompaniesDto } from 'src/dto/create-companies.dto';
import { UpdateCompaniesDto } from 'src/dto/update-companies.dto';
import { CompaniesRepository } from './companies.repository';

@Injectable()
export class CompaniesService {
    constructor(private readonly companiesRepository: CompaniesRepository) {}

    async getCompanies() {
        return await this.companiesRepository.GetCompanies();
    }

    async getCompanyById(id: number) {
        const company = await this.companiesRepository.getById(id);
        if (!company) {
            throw new NotFoundException(`Company with ID ${id} not found`);
        }
        return company;
    }

    async createCompany(createCompaniesDto: CreateCompaniesDto) {
        return await this.companiesRepository.create(createCompaniesDto);
    }

    async updateCompany(id: number, updateCompanies: UpdateCompaniesDto) {
        return await this.companiesRepository.update(id, updateCompanies);
    }

    async deleteCompany(id: number) {
        return await this.companiesRepository.delete(id);
    }
}
