import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CityService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllCities() {
    const cities = await this.prismaService.city.findMany();

    return cities;
  }
}
