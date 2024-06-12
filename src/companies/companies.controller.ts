import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
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


@Get('id')
async GetCompaniesById(@Param() id: number){
    return await this.companiesService.getCompanyById(id)
}


@Post()
async CreateCompany(@Body() createCompaniesDto: CreateCompaniesDto){
    return await this.companiesService.createCompany(createCompaniesDto)

}

@Put('id')
async UpdateCompany(@Param('id', ParseIntPipe) id: number, updateCompaniesDto: UpdateCompaniesDto) {
    return await this.companiesService.updateCompany(id, updateCompaniesDto)
}

@Delete('id')
async DeleteCompany(@Param('id', ParseIntPipe ) id: number) {
    return await this.companiesService.deleteCompany(id)
} 

}
