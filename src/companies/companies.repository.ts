import { Body, Delete, Get, Injectable, NotFoundException, Post, Put } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { CreateCompaniesDto } from 'src/dto/create-companies.dto';
import { UpdateCompaniesDto } from 'src/dto/update-companies.dto';

import { SupabaseService } from 'src/service/supabase.service';

@Injectable()
export class CompaniesRepository {
constructor(
    private readonly supabaseService: SupabaseService
){}

async GetCompanies(){
    try {
    const {data, error} = await this.supabaseService
    .getClient()
    .from('companies')
    .select('*')

    if(error) {
        throw new Error(error.message)
    }

    return data

    } catch (error) {
       throw new Error()
    }
    
    
}

async getById(id: number) {
    try {
        const { data, error } = await this.supabaseService
            .getClient()
            .from('companies')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            throw new Error(error.message);
        }

        return data; // This will return undefined if no data is found
    } catch (error) {
        throw new Error('Failed to fetch company by ID');
    }
}


async create(createCompaniesDto: CreateCompaniesDto ){
try {
    const {data, error} = await this.supabaseService
    .getClient()
    .from('companies')
    .insert(createCompaniesDto)

    if(error){
        throw new Error(error.message)
    }
    return data;
} catch (error) {
    throw new Error('Failed to create company')
}}



async update(id: number, UpdateCompany: UpdateCompaniesDto) {
    

    try {
        const { data, error } = await this.supabaseService
            .getClient()
            .from('companies')
            .update(UpdateCompany)
            .eq('id', id);

        if (error) {
            throw new Error(error.message);
        }
        return data;
    } catch (error) {
        throw new Error('Failed to update company');
    }
}





async delete(id: number){
    try {
        const{data, error} = await this.supabaseService
        .getClient()
        .from('companies')
        .delete()
        .eq('id',id)
    } catch (error) {
        throw new Error('Failed to delete company')
    }
}


}


