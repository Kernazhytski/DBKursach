import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { GetLaboratoryDTO } from './DTO/GetLaboratoryDTO';
import { LaboratoryService } from './laboratory.service';
import { EditListDTO } from './DTO/editListDTO';
import { DelLabDTO } from './DTO/delLabDTO';
import { AuthGuard } from '../app/auth.guard';
import { AdminGuard } from '../app/admin.guard';

@Controller('laboratory')
export class LaboratoryController {
  constructor(private readonly laboratoryService: LaboratoryService) {}

  @UseGuards(AuthGuard)
  @Get('get')
  async getUsers(@Query() getLabDTO: GetLaboratoryDTO, @Res() res: Response) {
    console.log(getLabDTO);
    const responce = await this.laboratoryService.getLaboratoryinfo(getLabDTO);
    console.log(responce);
    res.send(responce).status(200);
  }

  @Get('getAll')
  async getAllUsers(@Res() res: Response) {
    const responce = await this.laboratoryService.getAllLaboratoryInfo();

    res.send(responce).status(200);
  }

  @UseGuards(AdminGuard)
  @Post('edit')
  async editLaboratories(@Body() body: EditListDTO, @Res() res: Response) {
    console.log(body);
    await this.laboratoryService.editAll(body.laboratories);

    res.status(200);
  }

  @UseGuards(AdminGuard)
  @Post('del')
  async delLab(@Body() body: DelLabDTO, @Res() res: Response) {
    await this.laboratoryService.del(body.id);
    res.send('ok').status(200);
  }
}
