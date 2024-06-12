import { Controller, Get, Param, Post, Body, Put, Delete, NotFoundException } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompaniesDto } from 'src/dto/create-companies.dto';
import { UpdateCompaniesDto } from 'src/dto/update-companies.dto';

@Controller('companies')
export class CompaniesController {
    constructor(private readonly companiesService: CompaniesService) {}

    @Get()
    async getAllCompanies() {
        return await this.companiesService.getCompanies();
    }

    @Get(':id')
    async getCompanyById(@Param('id') id: number) {
        return await this.companiesService.getCompanyById(id);
    }

    @Post()
    async createCompany(@Body() createCompaniesDto: CreateCompaniesDto) {
        return await this.companiesService.createCompany(createCompaniesDto);
    }

    @Put(':id')
    async updateCompany(@Param('id') id: number, @Body() updateCompaniesDto: UpdateCompaniesDto) {
        return await this.companiesService.updateCompany(id, updateCompaniesDto);
    }

    @Delete(':id')
    async deleteCompany(@Param('id') id: number) {
        return await this.companiesService.deleteCompany(id);
    }
}
