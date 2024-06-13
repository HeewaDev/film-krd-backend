import { Injectable } from "@nestjs/common";
import { CreateShootingLocationsDto } from "src/dto/create-shooting-location.dto";
import { UpdateShootingLocationsDto } from "src/dto/update-shooting-location.dto";
import { SupabaseService } from "src/service/supabase.service";

@Injectable()
export class ShootingLocationRepository {
    constructor(private readonly supabaseService:SupabaseService) {}

    async getshootings(){
        const {data, error} = await this.supabaseService
        .getClient()
        .from('shooting-locations')
        .select('*')

        if(error) throw new Error(error.message)
            return data;

    }

    async getshootingById(id: number){
        const {data, error} = await this.supabaseService
        .getClient()
        .from('shooting-locations')
        .select('*')
        .eq('id', id)
        .single()
        if(error) throw new Error(error.message);
            return data
    }

    async createShootingLocation(createShootingLocationDto: CreateShootingLocationsDto){
        const {data, error} = await this.supabaseService
       
        .getClient()
        .from('shooting-locations')
        .insert(createShootingLocationDto)
    

        if(error) throw new Error(error.message)
            return data
    }

    async updateShootingLocation(id: number, updateShootingLocation: UpdateShootingLocationsDto){
        const { data, error} = await this.supabaseService
        .getClient()
        .from('shooting-locations')
        .update(updateShootingLocation)
        .eq('id', id)
        if(error) throw new Error(error.message)
            return data;
    }
    async deleteShootingLocation(id: number){
        const {data, error} = await this.supabaseService
        .getClient()
        .from('shooting-locations')
        .delete()
        .eq('id', id)
        if(error) throw new Error(error.message)

            return data;
    }
}