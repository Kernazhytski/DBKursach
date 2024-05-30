import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { GetUserInfoDTO } from './DTO/GetUserInfoDTO';
import { EdituserDTO } from './DTO/EdituserDTO';
import { DeleteUserDTO } from './DTO/DeleteUserDTO';
import { GetFilterUserRequestDTO } from './DTO/GetFilterUserRequestDTO';
import { AuthGuard } from '../app/auth.guard';
import { AdminGuard } from '../app/admin.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Post('edit')
  async editUser(@Body() userDTO: EdituserDTO, @Res() res: Response) {
    await this.userService.editUser(userDTO);

    res.status(200).send('ok');
  }

  @UseGuards(AuthGuard)
  @Get('get')
  async getUsers(@Query() getUserDTO: GetUserInfoDTO, @Res() res: Response) {
    const responce = await this.userService.getUsers(getUserDTO);

    res.status(200).send(responce);
  }

  @UseGuards(AdminGuard)
  @Delete('delete/:id')
  async deleteUsers(@Param() id: DeleteUserDTO, @Res() res: Response) {
    await this.userService.deleteUser(id.id);

    res.status(200).send('Deleted successfully');
  }

  @UseGuards(AdminGuard)
  @Get('filter')
  async getFilterUsers(
    @Query() getUserDTO: GetFilterUserRequestDTO,
    @Res() res: Response,
  ) {
    console.log(getUserDTO);
    const responce = await this.userService.filterUsers(getUserDTO);

    res.status(200).send(responce);
  }
}
