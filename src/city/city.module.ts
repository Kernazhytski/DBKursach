import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { MysqlModule } from '../mysql/mysql.module';

@Module({
  providers: [CityService],
  controllers: [CityController],
  imports: [MysqlModule],
})
export class CityModule {}
