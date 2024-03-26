import { Module } from '@nestjs/common';
import { LaboratoryService } from './laboratory.service';
import { LaboratoryController } from './laboratory.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [LaboratoryService, PrismaService],
  imports: [],
  controllers: [LaboratoryController],
})
export class LaboratoryModule {}
