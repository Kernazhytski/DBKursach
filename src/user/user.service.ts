import { Injectable } from '@nestjs/common';
import { MysqlService } from '../mysql/mysql.service';
import { CreateUserDTO } from './DTO/CreateUserDTO';
import { v4 as uuidv4 } from 'uuid';
import { GetUserInfoDTO } from './DTO/GetUserInfoDTO';

@Injectable()
export class UserService {
  constructor(private readonly mysqlProvider: MysqlService) {}

  async createUser(user: CreateUserDTO) {
    const sql = `
      CALL InsertUser(?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const birthDay = new Date(user.birthDay);

    const values = [
      uuidv4(),
      user.name,
      user.gender,
      user.phone,
      user.email,
      birthDay.getFullYear(),
      birthDay.getMonth(),
      birthDay.getDay(),
      user.labaratory,
    ];

    const result = await this.mysqlProvider.query(sql, values);
    return result[0][0]; // Assuming the procedure returns a result set with the new user ID
  }

  async getUsers(userGet: GetUserInfoDTO) {
    const userIds = userGet.id.length > 0 ? JSON.stringify(userGet.id) : '[]';

    const query = `SELECT GetUsersByIds(?) AS users`;

    const users = await this.mysqlProvider.query(query, [userIds]);
    return users[0];
  }
}
