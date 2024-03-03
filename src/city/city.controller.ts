import { Controller, Get, Res } from '@nestjs/common';
import { CityService } from './city.service';
import { Response } from 'express';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get('getAll')
  async getAll(@Res() res: Response) {
    const cities = await this.cityService.getAllCities();

    res.send(cities).status(200);
  }
}
