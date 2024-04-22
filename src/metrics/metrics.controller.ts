import { Controller, Get, Query, Res } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { Response } from 'express';

@Controller('metrics')
export class MetricsController {
  constructor(private readonly metricService: MetricsService) {}

  @Get('getMarks')
  async getMarks(@Query('user_id') user_id: string, @Res() res: Response) {
    const response = await this.metricService.getUserHealthMetrics(user_id);

    res.send(response).status(200);
  }
}
