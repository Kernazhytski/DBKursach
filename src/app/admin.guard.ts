import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private readonly jwtServiceAdmin: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    const decodedToken = this.jwtServiceAdmin.decode(token);
    console.log('decodedToken', decodedToken);
    const role = decodedToken['role'];

    if (!token) {
      console.log('NO');
      throw new UnauthorizedException();
    }

    if (role !== 'ADMIN') {
      console.log('NO');
      throw new UnauthorizedException();
    }
    return true;
  }

  protected extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
