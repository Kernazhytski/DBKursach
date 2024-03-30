import { Controller, Get, Query, Res } from '@nestjs/common';
import { AnalysesService } from './analyses.service';
import { Response } from 'express';

@Controller('analyses')
export class AnalysesController {
  constructor(private readonly analyseService: AnalysesService) {}

  @Get('getTable')
  async getTable(@Query('user_id') user_id: string, @Res() res: Response) {
    const response = await this.analyseService.getAnalysesForTable(user_id);

    res.send(response).status(200);
  }
}
