// import { Controller, Get, Query } from '@nestjs/common';
// import { SearchService } from './search.service';
// import { SearchFilmDto } from 'src/dto/search-film.dto'; // Adjust path as per your project structure
// import { SearchCastDto } from 'src/dto/search-cast.dto'; // Adjust path as per your project structure
// import { SearchCompanyDto } from 'src/dto/search-companies.dto'; // Adjust path as per your project structure
// import { SearchCrewDto } from 'src/dto/search-crew.dto'; // Adjust path as per your project structure

// Controller('search')
// export class SearchController {
//   constructor(private readonly searchService: SearchService) {}

//   @Get()
//   async searchAll(@Query() queryParams: any) {
//     try {
//       const data = await this.searchService.searchAll(queryParams);
//       return { success: true, data };
//     } catch (error) {
//       return { success: false, error: error.message };
//     }
//   }

//   @Get('films')
//   async searchFilms(@Query() query: SearchFilmDto) {
//     try {
//       const data = await this.searchService.searchFilmsByTitle(query.title);
//       return { success: true, data };
//     } catch (error) {
//       return { success: false, error: error.message };
//     }
//   }

//   @Get('casts')
//   async searchCasts(@Query() query: SearchCastDto) {
//     try {
//       const data = await this.searchService.searchCasts(query.name);
//       return { success: true, data };
//     } catch (error) {
//       return { success: false, error: error.message };
//     }
//   }

//   @Get('companies')
//   async searchCompanies(@Query() query: SearchCompanyDto) {
//     try {
//       const data = await this.searchService.searchCompanies(query.name, query.type, query.description);
//       return { success: true, data };
//     } catch (error) {
//       return { success: false, error: error.message };
//     }
//   }

//   @Get('crew')
//   async searchCrew(@Query() query: SearchCrewDto) {
//     try {
//       const data = await this.searchService.searchCrew(query.name, query.profession);
//       return { success: true, data };
//     } catch (error) {
//       return { success: false, error: error.message };
//     }
//   }
// }
