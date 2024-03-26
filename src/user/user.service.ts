import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './DTO/CreateUserDTO';
import { v4 as uuidv4 } from 'uuid';
import { GetUserInfoDTO } from './DTO/GetUserInfoDTO';
import { EdituserDTO } from './DTO/EdituserDTO';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismService: PrismaService) {}

  async createUser(user: CreateUserDTO) {
    const birthDay = new Date(user.birthDay);

    await this.prismService.user.create({
      data: {
        id: uuidv4(),
        name: user.name,
        gender: user.gender,
        phone: user.phone,
        email: user.email,
        year: birthDay.getFullYear(),
        mounth: birthDay.getMonth(),
        day: birthDay.getDay(),
        labaratory_id: user.labaratory,
      },
    });
  }

  async getUsers(userGet: GetUserInfoDTO) {
    if (userGet.id[0] === ' ') {
      const users = await this.prismService.user.findMany();
      return { users };
    } else {
      const users = await this.prismService.user.findMany({
        where: {
          id: { in: userGet.id },
        },
      });
      return { users };
    }
  }

  async editUser(userInfo: EdituserDTO) {
    const birthDay = new Date(userInfo.birthDay);

    await this.prismService.user.update({
      where: {
        id: userInfo.id,
      },
      data: {
        name: userInfo.name,
        gender: userInfo.gender,
        phone: userInfo.phone,
        email: userInfo.email,
        year: birthDay.getFullYear(),
        mounth: birthDay.getMonth(),
        day: birthDay.getDay(),
        labaratory_id: userInfo.labaratory,
      },
    });
  }

  async deleteUser(id: string) {
    await this.prismService.user.delete({
      where: {
        id: id,
      },
    });
  }
}
