import { Injectable } from '@nestjs/common';
import { MysqlService } from '../mysql/mysql.service';

@Injectable()
export class CountryService {
  constructor(private readonly mysqlProvider: MysqlService) {}

  async getAllCountries() {
    const query = 'SELECT * FROM Country as JSON';

    const cities = await this.mysqlProvider.query(query);

    return cities;
  }
}
