import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CountryService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllCountries() {
    const cities = await this.prismaService.country.findMany();

    return cities;
  }
}