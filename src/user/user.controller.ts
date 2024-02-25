import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './DTO/CreateUserDTO';
import { Response } from 'express';
import { GetUserInfoDTO } from './DTO/GetUserInfoDTO';
import { EdituserDTO } from './DTO/EdituserDTO';
import { DeleteUserDTO } from './DTO/DeleteUserDTO';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(@Body() userDTO: CreateUserDTO, @Res() res: Response) {
    await this.userService.createUser(userDTO);

    res.send('ok').status(200);
  }

  @Post('edit')
  async editUser(@Body() userDTO: EdituserDTO, @Res() res: Response) {
    await this.userService.editUser(userDTO);

    res.send('ok').status(200);
  }

  @Get('get')
  async getUsers(@Query() getUserDTO: GetUserInfoDTO, @Res() res: Response) {
    const responce = await this.userService.getUsers(getUserDTO);

    res.send(responce).status(200);
  }

  @Delete('delete/:id')
  async deleteUsers(@Param() id: DeleteUserDTO, @Res() res: Response) {
    await this.userService.deleteUser(id.id);

    res.send('Deleted successfully').status(200);
  }
}
