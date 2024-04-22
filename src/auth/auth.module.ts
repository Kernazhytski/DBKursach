import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      signOptions: {
        algorithm: 'RS512',
      },
      publicKey: process.env.SERVER_JWT_PUBLIC_KEY,
    }),
    UserModule,
  ],
  providers: [AuthService, PrismaService],
  controllers: [AuthController],
})
export class AuthModule {}
