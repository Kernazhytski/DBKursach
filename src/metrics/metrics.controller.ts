import { Controller, Get, Query, Res, UseGuards } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { Response } from 'express';
import { AuthGuard } from '../app/auth.guard';

@Controller('metrics')
export class MetricsController {
  constructor(private readonly metricService: MetricsService) {}

  @UseGuards(AuthGuard)
  @Get('getMarks')
  async getMarks(@Query('user_id') user_id: string, @Res() res: Response) {
    const response = await this.metricService.getUserHealthMetrics(user_id);

    res.send(response).status(200);
  }
}
