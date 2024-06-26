import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [CityService, PrismaService],
  controllers: [CityController],
  imports: [],
})
export class CityModule {}
