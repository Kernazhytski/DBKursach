import { Controller, Get, Res } from '@nestjs/common';
import { CountryService } from './country.service';
import { Response } from 'express';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get('getAll')
  async getAll(@Res() res: Response) {
    const countries = await this.countryService.getAllCountries();

    res.send(countries).status(200);
  }
}
