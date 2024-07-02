import { Controller, Delete, Get, NotFoundException, Param, Post, Put, Body, ParseIntPipe, Query } from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDto } from 'src/dto/create-film.dto';
import { UpdateFilmsDto } from 'src/dto/update-film.dto';
import { MyElasticsearchService } from 'src/elasticSearch.service';

@Controller('films')
export class FilmsController {

    constructor(private readonly filmsService: FilmsService,
      private readonly elasticService: MyElasticsearchService
    ){}


    @Get()
     async GetAllFILMS(){
        return await this.filmsService.GetAll();
     }

    





     

     


     @Get(':id')
     async GetfilmsByID(@Param('id')id: number){
        try {
            
            const films = await this.filmsService.GetFilmsById(id)
            if(!films){
                throw new NotFoundException('Film Not Found')
            }
        return  films;
        } catch (error) {
            console.error('Error in controller findOne:', error.message);
            throw new NotFoundException('Cast not found');
        }

     }

     @Post()
     async CreateFILM(@Body() createFilmDTO: CreateFilmDto){
        return await this.filmsService.CreateFilm(createFilmDTO)
     }

     @Put(':id')
     async UpdateFILM(@Param('id', ParseIntPipe) id:number, @Body() updateFilmDTO: UpdateFilmsDto){
        return await this.filmsService.UpdateFilm(id, updateFilmDTO)
     }

     @Delete(':id')
     async DeleteFILMS(@Param('id' , ParseIntPipe)id: number){
        return await this.filmsService.DeleteFilm(id)
     }

     @Get(':query')
     async searchFilms(@Param('query') query: string) {
       try {
         const results = await this.filmsService.searchFilms(query);
         return results; // Return the search results to the client
       } catch (error) {
         throw new Error('Error searching films');
       }
     }
   

}




