import { Injectable, NotFoundException } from '@nestjs/common';
import { SupabaseService } from 'src/service/supabase.service';
import { CreateFilmCompaniesDto } from 'src/dto/create-film-companies.dto';
import { UpdateFilmCompanyDto } from 'src/dto/update-film-companies.dto';

@Injectable()
export class FilmCompaniesRepository {
  constructor(private readonly supabaseService: SupabaseService) {}

  async findOne(id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('film_companies')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;

    return data;
  }

  async getFilmCompanies () {
    const {data, error} = await this.supabaseService
    .getClient()
    .from('film_companies')
    .select('*')

    if (error) throw error;

        return data;

    }
  

  async create(createFilmCompaniesDto: CreateFilmCompaniesDto) {
    const {film_id, company_id} = createFilmCompaniesDto;
    const supabase  = this.supabaseService.getClient();


    const { data: film, error: filmError } = await supabase
      .from('films')
      .select('*')
      .eq('id', film_id)
      .single();

    if (filmError || !film) {
      throw new NotFoundException(`Film with ID ${film_id} not found`);
    }

    const { data: company, error: companyError } = await supabase
      .from('companies')
      .select('*')
      .eq('id', company_id)
      .single();

    if (companyError || !company) {
      throw new NotFoundException(`Company with ID ${company_id} not found`);
    }

    const { data: filmCompany, error: filmCompanyError } = await supabase
      .from('film_companies')
      .insert([{ film_id: film_id, company_id: company_id }]);

    if (filmCompanyError) {
      throw new Error(filmCompanyError.message);
    }

    return filmCompany;
  }



  async update(id: number, updateFilmCompanyDto: UpdateFilmCompanyDto): Promise<any> {
    const supabase = this.supabaseService.getClient();

    if (updateFilmCompanyDto.film_id) {
      const { data: film, error: filmError } = await supabase
        .from('films')
        .select('*')
        .eq('id', updateFilmCompanyDto.film_id)
        .single();

      if (filmError || !film) {
        throw new NotFoundException(`Film with ID ${updateFilmCompanyDto.film_id} not found`);
      }
    }

    if (updateFilmCompanyDto.company_id) {
      const { data: company, error: companyError } = await supabase
        .from('companies')
        .select('*')
        .eq('id', updateFilmCompanyDto.company_id)
        .single();

      if (companyError || !company) {
        throw new NotFoundException(`Company with ID ${updateFilmCompanyDto.company_id} not found`);
      }
    }

    const { data: filmCompany, error: filmCompanyError } = await supabase
      .from('film_companies')
      .update(updateFilmCompanyDto)
      .eq('id', id);

    if (filmCompanyError) {
      throw new Error(filmCompanyError.message);
    }

    return filmCompany;
  }



  async delete(id: number): Promise<any> {
    const supabase = this.supabaseService.getClient();

    const { data: filmCompany, error: filmCompanyError } = await supabase
      .from('film_companies')
      .delete()
      .eq('id', id);

    if (filmCompanyError) {
      throw new Error(filmCompanyError.message);
    }

    return filmCompany;
  }


  async findByFilmId(film_id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('film_companies')
      .select('*')
      .eq('film_id', film_id);

    if (error) throw error;

    return data;
  }



}
  

  // async update(id: number, updateFilmCompaniesDto: UpdateFilmCompaniesDto) {
  //   const { data, error } = await this.supabaseService
  //     .getClient()
  //     .from('film_companies')
  //     .update(updateFilmCompaniesDto)
  //     .eq('id', id);

  //   if (error) throw error;

  //   return data;
  // }

  // async remove(id: number) {
  //   const { data, error } = await this.supabaseService
  //     .getClient()
  //     .from('film_companies')
  //     .delete()
  //     .eq('id', id);

  //   if (error) throw error;

  //   return data;
  // }


  

  
