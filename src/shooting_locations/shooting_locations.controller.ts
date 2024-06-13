import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ShootingLocationsService } from './shooting_locations.service';
import { CreateShootingLocationsDto } from 'src/dto/create-shooting-location.dto';
import { UpdateShootingLocationsDto } from 'src/dto/update-shooting-location.dto';

@Controller('shooting-locations')
export class ShootingLocationsController {
    constructor(private readonly shootingLocationsService: ShootingLocationsService) {}

    @Get()
    async GetShootingLocations() {
        try {
            const GetShooting = await this.shootingLocationsService.GetAllShootingLocations();
            if (!GetShooting) {
                throw new NotFoundException('Error Getting shooting Locations');
            }
            return GetShooting;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    @Get(':id')
    async GetShootingLocationByID(@Param('id', ParseIntPipe) id: number) {
        try {
            const GetOneShooting = await this.shootingLocationsService.GetShootingLocationById(id);
            if (!GetOneShooting) {
                throw new NotFoundException('Error Getting a shoot location');
            }
            return GetOneShooting;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    @Post()
    async CreateShootingLocation(@Body() createShootingLocationDto: CreateShootingLocationsDto) {
        
        try {
            return await this.shootingLocationsService.CreateShootingLocation(createShootingLocationDto);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    @Put(':id')
    async UpdateShootingLocation(@Param('id', ParseIntPipe) id: number, @Body() updateShootingLocationDto: UpdateShootingLocationsDto) {
        try {
            const UpdateShootingLocation = await this.shootingLocationsService.updateShootingLocation(id, updateShootingLocationDto);
            if (!UpdateShootingLocation) {
                throw new NotFoundException('Error in Updating shooting Location');
            }
            return UpdateShootingLocation;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
