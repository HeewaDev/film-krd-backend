import { Injectable } from "@nestjs/common";
import { CreateNotesDto } from "src/dto/create-notes.dto";
import { UpdateNotesDto } from "src/dto/update-notes.dto";
import { SupabaseService } from "src/service/supabase.service";

@Injectable()

export class NotesRepository{
    constructor(private readonly supabaseService: SupabaseService){}

    async GetAll(){
        const {data, error} = await this.supabaseService 
        .getClient()
        .from('notes')
        .select('*')

        if(error) throw new Error(error.message)

            return data;
    }

    async getbyId(id: number){
        const {data, error} = await this.supabaseService
        .getClient()
        .from('notes')
        .select('*')
        .eq('id', id)
        .single()

        if(error) throw new Error(error.message)

            return data;
    }

    async create(createNotesdto: CreateNotesDto){
        const {data, error} = await this.supabaseService
        .getClient()
        .from('notes')
        .insert(createNotesdto)

        if(error) throw new Error(error.message)

            return data;

    }

    async update(id:number, updateNotesDto: UpdateNotesDto){
        const { data, error} =  await this.supabaseService
        .getClient()
        .from('notes')
        .update(updateNotesDto)
        .eq('id', id)
        if(error) throw new Error(error.message)
            return data;
    }
    
    async delete(id: number){
        const { data, error} = await this.supabaseService
        .getClient()
        .from('notes')
        .delete()
        .eq('id', id)

        if(error) throw new Error(error.message)
            return data;

    }

}