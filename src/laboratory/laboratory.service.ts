import { Injectable } from '@nestjs/common';
import { MysqlService } from '../mysql/mysql.service';
import { GetLaboratoryDTO } from './DTO/GetLaboratoryDTO';

@Injectable()
export class LaboratoryService {
  constructor(private readonly mysqlProvider: MysqlService) {}

  async getLaboratoryinfo(request: GetLaboratoryDTO) {
    const query = `SELECT getLabInfoById(?) as lab_info`;

    const users = await this.mysqlProvider.query(query, [request.id]);
    return users[0];
  }
}
