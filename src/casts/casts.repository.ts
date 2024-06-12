import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/service/supabase.service';
import { CreateCastDto } from 'src/dto/create-casts.dto';
import { UpdateCastDto } from 'src/dto/update-casts.dto';

@Injectable()
export class CastsRepository {
  constructor(private readonly supabaseService: SupabaseService) {}

  async findAll() {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('casts')
      .select('*');
    if (error) throw new Error(error.message);
    return data;
  }

  async findById(id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('casts')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw new Error(error.message);
    return data;
  }

  async create(createCastDto: CreateCastDto) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('casts')
      .insert(createCastDto);
    if (error) throw new Error(error.message);
    return data;
  }

  async update(id: number, updateCastDto: UpdateCastDto) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('casts')
      .update(updateCastDto)
      .eq('id', id);
    if (error) throw new Error(error.message);
    return data;
  }

  async delete(id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('casts')
      .delete()
      .eq('id', id);
    if (error) throw new Error(error.message);
    return data;
  }
}
