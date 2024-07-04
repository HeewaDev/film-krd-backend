import { Delete, Get, Injectable, Post, Put } from "@nestjs/common";
import { FilmLocationService } from "./film_location.service";
import { CreateFilmShootingLocationDto } from "src/dto/create-film_shooting_locationDto";

export class FilmLocationController {
    constructor(private readonly filmLocationService: FilmLocationService){}


    @Get()
    async getFilmShootingLocations() {
        return await this.filmLocationService.getFilmLocations()
    }


    @Get(':film_id')
    async getFilmShootingLocationById(film_id: number) {
        return await this.filmLocationService.getFilmLocationById(film_id)
    }

    @Post()
    async createFilmShootingLocation(CreateFilmShootingLocationDto: any) {
        return await this.filmLocationService.createFilmLocation(CreateFilmShootingLocationDto)
    }

    // @Put('film_id') // not efficient Does not work!  100% 
    // async  UpdateFilmShootingLocation(film_id: number, shooting_location_id: number, updateFilmshootingLocationDto: any) {
    //     return await this.filmLocationService.update(film_id, shooting_location_id, updateFilmshootingLocationDto)
    

    // @Delete(':film_id') //same as above
    // async deleteFilmShootingLocation(film_id: number) {
    //     return await this.filmLocationService.deleteFilmLocation(film_id)
    // }

}