import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { LaboratoryModule } from '../laboratory/laboratory.module';
import { CityModule } from '../city/city.module';
import { CountryModule } from '../country/country.module';
import { AnalysesModule } from '../analyses/analyses.module';
import { MetricsModule } from '../metrics/metrics.module';
import { AuthModule } from '../auth/auth.module';
import { DocsModule } from '../docs/docs.module';

@Module({
  imports: [
    UserModule,
    LaboratoryModule,
    CityModule,
    CountryModule,
    AnalysesModule,
    MetricsModule,
    AuthModule,
    DocsModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
