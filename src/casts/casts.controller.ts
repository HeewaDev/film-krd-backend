import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, ValidationPipe } from '@nestjs/common';
import { CastsService } from './casts.service';
import { CreateCastDto } from 'src/dto/create-casts.dto';
import { UpdateCastDto } from 'src/dto/update-casts.dto';
import { InjectSupabaseService } from 'src/service/supabase.decorator';

@Controller('casts')
export class CastsController {
    constructor(private readonly castsService: CastsService){}

    @Get()
    async findAll(){
        return await this.castsService.GetCasts()
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        try {
            const cast = await this.castsService.FindCastById(id);
            if (!cast) {
                throw new NotFoundException('Cast not found');
            }
            return cast;
        } catch (error) {
            console.error('Error in controller findOne:', error.message);
            throw new NotFoundException('Cast not found');
        }
    }


    @Post()
    async create(@Body() CreateCast: CreateCastDto){
        return await this.castsService.CreateCasts(CreateCast)
    }


   @Put(':id')
   async update(@Param('id' , ParseIntPipe) id:number, @Body() UpdateCast: UpdateCastDto){
    return await this.castsService.UpdateCast(id, UpdateCast)
   }

   @Delete(':id')
   async remove(@Param('id', ParseIntPipe) id:number, @Body(ValidationPipe) UpdateCast: UpdateCastDto){
    return await this.castsService.DeleteCast(id)
   }
}
