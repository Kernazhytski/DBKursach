import { Module } from '@nestjs/common';
import { AnalysesService } from './analyses.service';
import { AnalysesController } from './analyses.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [AnalysesService, PrismaService],
  controllers: [AnalysesController],
})
export class AnalysesModule {}
