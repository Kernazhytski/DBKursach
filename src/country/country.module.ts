import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [CountryService, PrismaService],
  controllers: [CountryController],
  imports: [],
})
export class CountryModule {}
