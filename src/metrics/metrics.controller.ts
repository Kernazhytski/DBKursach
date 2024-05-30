import { Controller, Get, Query, Req, Res, UseGuards } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { Request, Response } from 'express';
import { AuthGuard } from '../app/auth.guard';

@Controller('metrics')
export class MetricsController {
  constructor(private readonly metricService: MetricsService) {}

  @UseGuards(AuthGuard)
  @Get('getMarks')
  async getMarks(@Query('user_id') user_id: string, @Res() res: Response) {
    const response = await this.metricService.getUserHealthMetrics(user_id);

    res.status(200).send(response);
  }

  @UseGuards(AuthGuard)
  @Get('get')
  async get(@Req() req: Request, @Res() res: Response) {
    const user_id = req['userId'];
    const response = await this.metricService.getUserHealthMetrics(user_id);

    res.status(200).send(response);
  }
}
