import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './DTO/CreateUserDTO';
import { Response } from 'express';
import { GetUserInfoDTO } from './DTO/GetUserInfoDTO';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(@Body() userDTO: CreateUserDTO, @Res() res: Response) {
    await this.userService.createUser(userDTO);

    res.send('ok').status(200);
  }

  @Get('get')
  async getUsers(@Body() getUserDTO: GetUserInfoDTO, @Res() res: Response) {
    const responce = await this.userService.getUsers(getUserDTO);

    res.send(responce).status(200);
  }
}
