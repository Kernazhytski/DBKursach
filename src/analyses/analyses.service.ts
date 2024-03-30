import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AnalysesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUserAnalyses(user_id: string) {
    return this.prismaService.testResults.findMany({
      where: {
        user_id,
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
}
