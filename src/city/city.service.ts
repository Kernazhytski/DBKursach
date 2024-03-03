import { Injectable } from '@nestjs/common';
import { MysqlService } from '../mysql/mysql.service';

@Injectable()
export class CityService {
  constructor(private readonly mysqlProvider: MysqlService) {}

  async getAllCities() {
    const query = 'SELECT * FROM City as JSON';

    const cities = await this.mysqlProvider.query(query);

    return cities;
  }
}
