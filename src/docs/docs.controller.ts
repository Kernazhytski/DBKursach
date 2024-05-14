import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AdminGuard } from '../app/admin.guard';
import { Request, Response } from 'express';
import { DocsService } from './docs.service';
import { AuthGuard } from '../app/auth.guard';

@Controller('docs')
export class DocsController {
  constructor(private readonly docServise: DocsService) {}

  @UseGuards(AdminGuard)
  @Get('getAdmin')
  async createAdminDoc(@Res() res: Response) {
    const doc = await this.docServise.generateWordDocument();

    res.setHeader(
      'Content-Disposition',
      'attachment; filename=My Document.docx',
    );
    res.send(Buffer.from(doc, 'base64'));
  }

  @UseGuards(AuthGuard)
  @Get('getUser')
  async createCountry(@Res() res: Response, @Req() req: Request) {
    const user_id = req['userId'];
    const doc = await this.docServise.getUserDoc(user_id);

    res.setHeader(
      'Content-Disposition',
      'attachment; filename=My Document.docx',
    );
    res.send(Buffer.from(doc, 'base64'));
  }
}
