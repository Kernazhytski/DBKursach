import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AnalysesService } from './analyses.service';
import { Response, Request } from 'express';
import { AuthGuard } from '../app/auth.guard';
import { CreateAnalyseDTO } from './DTO/createAnalyseDTO';

@Controller('analyses')
export class AnalysesController {
  constructor(private readonly analyseService: AnalysesService) {}

  @UseGuards(AuthGuard)
  @Get('getTable')
  async getTable(@Query('user_id') user_id: string, @Res() res: Response) {
    const response = await this.analyseService.getAnalysesForTable(user_id);

    res.status(200).send(response);
  }

  @UseGuards(AuthGuard)
  @Get('get')
  async get(@Res() res: Response, @Req() req: Request) {
    const user_id = req['userId'];
    const response = await this.analyseService.getAnalysesForTable(user_id);

    res.send(response).status(200);
  }

  @UseGuards(AuthGuard)
  @Post('set')
  async save(
    @Res() res: Response,
    @Req() req: Request,
    @Body() body: CreateAnalyseDTO,
  ) {
    const user_id = req['userId'];
    await this.analyseService.createAnalyse(body, user_id);

    res.status(201).send();
  }
}
