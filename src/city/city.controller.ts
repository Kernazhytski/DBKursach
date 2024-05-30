import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { CityService } from './city.service';
import { Response } from 'express';
import { CityCreateRequestDTO } from './dto/CityCreateRequestDTO';
import { AuthGuard } from '../app/auth.guard';
import { AdminGuard } from '../app/admin.guard';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @UseGuards(AuthGuard)
  @Get('getAll')
  async getAll(@Res() res: Response) {
    const cities = await this.cityService.getAllCities();

    res.status(200).send(cities);
  }

  @UseGuards(AdminGuard)
  @Post('create')
  async createCity(
    @Res() res: Response,
    @Body() cityData: CityCreateRequestDTO,
  ) {
    await this.cityService.create(cityData);
    res.status(200).send('ok');
  }
}
