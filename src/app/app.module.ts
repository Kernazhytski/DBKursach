import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { LaboratoryModule } from '../laboratory/laboratory.module';

@Module({
  imports: [UserModule, LaboratoryModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
