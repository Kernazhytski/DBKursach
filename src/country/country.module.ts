import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { MysqlModule } from '../mysql/mysql.module';

@Module({
  providers: [CountryService],
  controllers: [CountryController],
  imports: [MysqlModule],
})
export class CountryModule {}
