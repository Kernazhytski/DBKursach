import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateAnalyseDTO } from './DTO/createAnalyseDTO';
import { v4 as uuidv4 } from 'uuid';
import { MetricsType } from '@prisma/client';

@Injectable()
export class AnalysesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUserAnalyses(user_id: string) {
    return this.prismaService.testResults.findMany({
      where: {
        user_id,
      },
      select: {
        type: true,
        value: true,
        unit: true,
      },
    });
  }

  async getAnalysesForTable(user_id: string) {
    const userAnalyses = await this.getUserAnalyses(user_id);

    return userAnalyses.map((analyse) => {
      return {
        analyseType: analyse.type,
        result: analyse.value,
        measure: analyse.unit,
      };
    });
  }

  async createAnalyse(data: CreateAnalyseDTO, userId: string) {
    const date = new Date();
    await this.prismaService.testResults.create({
      data: {
        user: {
          connect: {
            id: userId,
          },
        },
        unit: data.unit,
        type: data.type,
        value: data.value,
        TestDay: date.getDay(),
        TestMounth: date.getMonth(),
        TestYear: date.getFullYear(),
        id: uuidv4(),
      },
    });

    await this.prismaService.metrics.createMany({
      data: [
        {
          type: MetricsType.liver,
          value: Math.floor(Math.random() * 10) + 1,
          created_at: new Date(),
          user_id: userId,
        },
        {
          type: MetricsType.commonScrining,
          value: Math.floor(Math.random() * 10) + 1,
          created_at: new Date(),
          user_id: userId,
        },
        {
          type: MetricsType.heart,
          value: Math.floor(Math.random() * 10) + 1,
          created_at: new Date(),
          user_id: userId,
        },
        {
          type: MetricsType.digestion,
          value: Math.floor(Math.random() * 10) + 1,
          created_at: new Date(),
          user_id: userId,
        },
      ],
    });
  }
}
