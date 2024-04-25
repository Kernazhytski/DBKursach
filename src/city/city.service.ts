import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CityCreateRequestDTO } from './dto/CityCreateRequestDTO';

@Injectable()
export class CityService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllCities() {
    const cities = await this.prismaService.city.findMany();

    return cities;
  }

  async create(data: CityCreateRequestDTO) {
    await this.prismaService.city.create({
      data: {
        name: data.name,
        country_id: data.country_id,
      },
    });
  }
}
