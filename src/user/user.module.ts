import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MysqlModule } from '../mysql/mysql.module';

@Module({
  providers: [UserService],
  imports: [MysqlModule],
  controllers: [UserController],
})
export class UserModule {}
