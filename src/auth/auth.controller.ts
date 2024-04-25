import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { CreateUserDTO } from '../user/DTO/CreateUserDTO';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginRequest } from './DTO/LoginRequest';
import { AdminGuard } from '../app/admin.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async createUser(@Body() userDTO: CreateUserDTO, @Res() res: Response) {
    const response = await this.authService.register(userDTO);

    res.send(response).status(200);
  }

  @UseGuards(AdminGuard)
  @Get('admin')
  async isAdmin(@Res() res: Response) {
    res.status(200);
  }

  @Post('login')
  async login(@Body() userDTO: LoginRequest, @Res() res: Response) {
    console.log({
      login: userDTO.login,
      pass: userDTO.password,
    });

    const response = await this.authService.login(
      userDTO.login,
      userDTO.password,
    );

    console.log(response);

    res.send(response).status(200);
  }
}
