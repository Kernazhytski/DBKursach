import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { CountryService } from './country.service';
import { Response } from 'express';
import { CountryCreateDTORequest } from './dto/CountryCreateDTORequest';
import { AuthGuard } from '../app/auth.guard';
import { AdminGuard } from '../app/admin.guard';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @UseGuards(AuthGuard)
  @Get('getAll')
  async getAll(@Res() res: Response) {
    const countries = await this.countryService.getAllCountries();

    res.send(countries).status(200);
  }

  @UseGuards(AdminGuard)
  @Post('create')
  async createCountry(
    @Res() res: Response,
    @Body() countryData: CountryCreateDTORequest,
  ) {
    await this.countryService.createCountry(countryData.name);

    res.send('OK').status(200);
  }
}
