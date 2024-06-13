import { Injectable } from "@nestjs/common";
import { CreateShootingLocationsDto } from "src/dto/create-shooting-location.dto";
import { UpdateShootingLocationsDto } from "src/dto/update-shooting-location.dto";
import { SupabaseService } from "src/service/supabase.service";

@Injectable()
export class FilmLocation {
    constructor(private readonly supabaseService: SupabaseService){}

    async get(){
      const {data, error} = await this.supabaseService
      .getClient()
      .from('film-location')
      .select('*')

      if(error) throw new Error(error.message)

        return data;
    }

    async getbyId(id: number) {
        const {data, error} = await this.supabaseService
        .getClient()
        .from('film-location')
        .select('*')
        .eq('id', id)

        if(error) throw new Error(error.message)
            return data;
    }

    async create(createShootingLocations: CreateShootingLocationsDto){
        const { data, error} = await this.supabaseService
        .getClient()
        .from('films-location')
        .insert(createShootingLocations)

        if(error) throw new Error(error.message)

            return data;
    }


    async update(id:number, updateShootingLocations: UpdateShootingLocationsDto){
        const {data, error } = await this.supabaseService
        .getClient()
        .from('films-location')
        .update(updateShootingLocations)

        if(error) throw new Error(error.message)
            return data;

    }
       

    
}