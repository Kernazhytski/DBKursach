import { Module } from '@nestjs/common';
import { DocsService } from './docs.service';
import { DocsController } from './docs.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [DocsService, PrismaService],
  controllers: [DocsController],
})
export class DocsModule {}
