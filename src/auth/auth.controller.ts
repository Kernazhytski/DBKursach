import { Body, Controller, Post, Res } from '@nestjs/common';
import { CreateUserDTO } from '../user/DTO/CreateUserDTO';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginRequest } from './DTO/LoginRequest';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async createUser(@Body() userDTO: CreateUserDTO, @Res() res: Response) {
    const response = await this.authService.register(userDTO);

    res.send(response).status(200);
  }

  @Post('login')
  async login(@Body() userDTO: LoginRequest, @Res() res: Response) {
    const response = await this.authService.login(
      userDTO.login,
      userDTO.password,
    );

    res.send(response).status(200);
  }
}
