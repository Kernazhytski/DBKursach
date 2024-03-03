import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { LaboratoryModule } from '../laboratory/laboratory.module';
import { CityModule } from '../city/city.module';
import { CountryModule } from '../country/country.module';

@Module({
  imports: [UserModule, LaboratoryModule, CityModule, CountryModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
