import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, ValidationPipe } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompaniesDto } from 'src/dto/create-companies.dto';
import { UpdateCompaniesDto } from 'src/dto/update-companies.dto';


@Controller('companies')
export class CompaniesController {
constructor(private readonly companiesService: CompaniesService)  {}

@Get()
async GetAllCompanies() {
    return await this.companiesService.getCompanies()
}


@Get(':id')
async GetCompaniesById(@Param('id', ParseIntPipe) id: number){
    return await this.companiesService.getCompanyById(id)
}


@Post()
async CreateCompany(@Body() createCompaniesDto: CreateCompaniesDto){
    return await this.companiesService.createCompany(createCompaniesDto)

}

@Put(':id')
async UpdateCompany(@Param('id', ParseIntPipe) id: number, @Body() updateCompaniesDto: UpdateCompaniesDto) {
    console.log('updateCompaniesDto:', updateCompaniesDto); // Check the contents of updateCompaniesDto
    return await this.companiesService.updateCompany(id, updateCompaniesDto);
}


@Delete(':id')
async DeleteCompany(@Param('id', ParseIntPipe ) id: number, @Body(ValidationPipe) UpdateCompany: UpdateCompaniesDto) {
    return await this.companiesService.deleteCompany(id)
} 

}


