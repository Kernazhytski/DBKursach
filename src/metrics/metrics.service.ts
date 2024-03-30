import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { MetricsType } from '@prisma/client';

@Injectable()
export class MetricsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUserHealthMetrics(user_id: string) {
    const metrics = await this.prismaService.metrics.findMany({
      where: {
        user_id,
        type: {
          in: [
            MetricsType.liver,
            MetricsType.commonScrining,
            MetricsType.heart,
            MetricsType.digestion,
          ],
        },
      },
      orderBy: {
        created_at: 'desc',
      },
      distinct: ['type'],
    });

    return metrics.reduce((result, obj) => {
      result[obj.type] = obj.value;
      return result;
    }, {});
  }
}
