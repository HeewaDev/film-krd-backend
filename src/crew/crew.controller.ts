import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, ValidationPipe } from '@nestjs/common';
import { CrewService } from './crew.service';
import { CreateCrewDto } from 'src/dto/create-crew.dto';
import { UpdateCrewDto } from 'src/dto/update-crew.dto';

@Controller('crew')
export class CrewController {
constructor(private readonly crewService: CrewService) {}


    @Get()
    async GetAllCrew(){
        return await this.crewService.GetAllCrew()
    }

    @Get(':id')
    async GetCrewById(@Param('id', ParseIntPipe) id: number){
        return await this.crewService.GetCrewById(id)
    }


    @Post()
    async CreateCrew(@Body() createCrewDto: CreateCrewDto){
        return await this.crewService.CreateCrew(createCrewDto)
    }

    @Put(':id')
    async UpdateCrew(@Param('id', ParseIntPipe) id:number, @Body() updateCrewDto: UpdateCrewDto){
        return await this.crewService.UpdateCrew(id, updateCrewDto)
    }

    @Delete(':id')
    async DeleteCrew(@Param('id', ParseIntPipe) id: number){
        return await this.crewService.DeleteCrew(id)
    }

}
