import { Injectable } from '@nestjs/common';
import { FilmsRepository } from './films.repository';
import { CreateFilmDto } from 'src/dto/create-film.dto';
import { UpdateFilmsDto } from 'src/dto/update-film.dto';
import { SupabaseService } from 'src/service/supabase.service';
import { MyElasticsearchService } from 'src/elasticSearch.service';
import { FilmsSearchRepository } from 'src/search/search.repository';

@Injectable()
export class FilmsService {

    constructor(private readonly filmsRepository: FilmsRepository,
         private readonly supabaseService : SupabaseService,
         private readonly myElasticSearch: MyElasticsearchService,
         private readonly filmSearchRepository: FilmsSearchRepository
    ){}


    async GetAll(){
        return await this.filmsRepository.getAll()
    }


    async GetFilmsById(id: number){
        return await this.filmsRepository.getById(id)
    }

    async CreateFilm(createFilmDto: CreateFilmDto){
        return await this.filmsRepository.create(createFilmDto)
    }
 


    async UpdateFilm(id: number, updateFilmDto: UpdateFilmsDto){

        return await this.filmsRepository.update(id, updateFilmDto)
    


        }


        async DeleteFilm(id: number){
            return await this.filmsRepository.delete(id)
        }

      

        async searchFilms(title: string, genre: string, keywords: string) {
            return this.filmSearchRepository.findFilms(title, genre, keywords);
        }

        


//          async searchFilms(query: string): Promise<Film[]> {
//     return this.filmsRepository
//       .createQueryBuilder('film')
//       .where('film.title ILIKE :query', { query: `%${query}%` }) // Search by title
//       .orWhere('film.genre ILIKE :query', { query: `%${query}%` }) // Search by genre
//       .getMany();
//   }
}




        



