import { Module } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { MetricsController } from './metrics.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [MetricsService, PrismaService],
  controllers: [MetricsController],
})
export class MetricsModule {}
