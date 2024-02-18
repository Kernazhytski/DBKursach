import { Module } from '@nestjs/common';
import { LaboratoryService } from './laboratory.service';
import { LaboratoryController } from './laboratory.controller';
import { MysqlModule } from '../mysql/mysql.module';

@Module({
  providers: [LaboratoryService],
  imports: [MysqlModule],
  controllers: [LaboratoryController],
})
export class LaboratoryModule {}
