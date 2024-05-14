import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as process from 'process';
import { CreateUserDTO } from '../user/DTO/CreateUserDTO';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  generateToken(userIdKeycloak: string, role: string): string {
    return this.jwtService.sign(
      { id: userIdKeycloak, role },
      {
        algorithm: 'RS512', // Signature algorithm corresponding to your key
        privateKey: process.env.SERVER_JWT_PRIVATE_KEY, // Private key
        expiresIn: 1000 * 60 * 60,
      },
    );
  }

  async register(user: CreateUserDTO) {
    const userId = await this.userService.createUser(user);
    return { accessToken: this.generateToken(userId, 'User') };
  }

  async login(username: string, password: string) {
    const user = await this.prismaService.user.findFirst({
      where: {
        email: username,
        password: password,
      },
    });
    if (user) {
      return {
        accessToken: this.generateToken(user.id, user.role),
        role: user.role,
      };
    } else {
      throw new UnauthorizedException();
    }
  }
}
