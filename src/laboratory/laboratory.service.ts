import { Injectable } from '@nestjs/common';
import { MysqlService } from '../mysql/mysql.service';
import { GetLaboratoryDTO } from './DTO/GetLaboratoryDTO';
import { Laboratory } from './DTO/editListDTO';

@Injectable()
export class LaboratoryService {
  constructor(private readonly mysqlProvider: MysqlService) {}

  async getLaboratoryinfo(request: GetLaboratoryDTO) {
    const query = `SELECT getLabInfoById(?) as lab_info`;

    const users = await this.mysqlProvider.query(query, [request.id]);
    return users[0];
  }

  async getAllLaboratoryInfo() {
    const query = `SELECT * FROM Labaratory AS JSON`;

    const users = await this.mysqlProvider.query(query);
    console.log(users);
    return users;
  }

  async editAll(laboratories: Laboratory[]) {
    const temporary: string = `
        CREATE TEMPORARY TABLE temp (
          id INT PRIMARY KEY,
          constructedYear INT,
          constructedMounth INT,
          constructedDay INT,
          city_id INT,
          name VARCHAR(191)
        )
      `;

    const fill: string = `
        INSERT INTO temp (
          id, constructedYear, constructedMounth, constructedDay, city_id, name
        ) VALUES ?
      `;

    const data = [
      laboratories.map((lab) => [
        lab.id,
        lab.constructedYear,
        lab.constructedMounth,
        lab.constructedDay,
        lab.city_id,
        lab.name,
      ]),
    ];

    const transaction: string = `
        INSERT INTO Labaratory (
          id, constructedYear, constructedMounth, constructedDay, city_id, name
        )
        SELECT
          id, constructedYear, constructedMounth, constructedDay, city_id, name
        FROM temp
        ON DUPLICATE KEY UPDATE
          constructedYear = VALUES(constructedYear),
          constructedMounth = VALUES(constructedMounth),
          constructedDay = VALUES(constructedDay),
          city_id = VALUES(city_id),
          name = VALUES(name)
      `;

    await this.mysqlProvider.upsert(data, temporary, fill, transaction);
  }
}
