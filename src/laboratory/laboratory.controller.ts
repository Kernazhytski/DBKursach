import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { GetLaboratoryDTO } from './DTO/GetLaboratoryDTO';
import { LaboratoryService } from './laboratory.service';

@Controller('laboratory')
export class LaboratoryController {
  constructor(private readonly laboratoryService: LaboratoryService) {}

  @Get('get')
  async getUsers(@Query() getLabDTO: GetLaboratoryDTO, @Res() res: Response) {
    const responce = await this.laboratoryService.getLaboratoryinfo(getLabDTO);

    res.send(responce).status(200);
  }
}
