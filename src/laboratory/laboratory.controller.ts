import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { GetLaboratoryDTO } from './DTO/GetLaboratoryDTO';
import { LaboratoryService } from './laboratory.service';
import { EditListDTO } from './DTO/editListDTO';
import { DelLabDTO } from './DTO/delLabDTO';

@Controller('laboratory')
export class LaboratoryController {
  constructor(private readonly laboratoryService: LaboratoryService) {}

  @Get('get')
  async getUsers(@Query() getLabDTO: GetLaboratoryDTO, @Res() res: Response) {
    const responce = await this.laboratoryService.getLaboratoryinfo(getLabDTO);

    res.send(responce).status(200);
  }

  @Get('getAll')
  async getAllUsers(@Res() res: Response) {
    const responce = await this.laboratoryService.getAllLaboratoryInfo();

    res.send(responce).status(200);
  }

  @Post('edit')
  async editLaboratories(@Body() body: EditListDTO, @Res() res: Response) {
    console.log(body);
    await this.laboratoryService.editAll(body.laboratories);

    res.send('ok').status(200);
  }

  @Post('del')
  async delLab(@Body() body: DelLabDTO, @Res() res: Response) {
    await this.laboratoryService.del(body.id);
    res.send('ok').status(200);
  }
}
