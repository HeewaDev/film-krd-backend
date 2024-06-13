import { Injectable } from "@nestjs/common";
import { CreateCrewDto } from "src/dto/create-crew.dto";
import { UpdateCrewDto } from "src/dto/update-crew.dto";
import { SupabaseService } from "src/service/supabase.service";


@Injectable() 
export class CrewRepository {
    constructor(private supabaseService: SupabaseService) {}
  

    async getAll(){

        const {data, error} = await this.supabaseService
        .getClient()
        .from('crew')
        .select('*')

        if(error) throw new Error(error.message)
        return data;
    }

    async findById(id: number) {
        
        
    
        
        const { data, error } = await this.supabaseService
            .getClient()
            .from('crew')
            .select('*')
            .eq('id', id)
            .single();
    
        if (error) {
            throw new Error(error.message);
        }
    
        return data;
    }
    async create(createCrewDto: CreateCrewDto) {
        // Assuming Supabase uses a method for raw queries (replace with actual method)
       
        const { data, error } = await this.supabaseService
        .getClient()
          .from('crew')
          .insert(createCrewDto)
          
          
      
        if (error) {
          throw new Error(error.message);
        }
      
        return data;
      }
    async update(id: number, updateCrewDto: UpdateCrewDto) {
        const {data, error} = await this.supabaseService
        .getClient()
        .from('crew')
        .update(updateCrewDto)
        .eq('id', id)

        if(error) throw new Error(error.message)
            return data;
    }

    async delete(id: number){
       
        const {data, error} = await this.supabaseService
        .getClient()
        .from('crew')
        .delete()
        .eq('id', id)


            console.log(error)
        if(error) throw new Error('Failed deleting crew')

            return data;

        
        
    }
}