import { HttpException, Injectable } from '@nestjs/common';
import * as mysql from 'mysql2/promise';

@Injectable()
export class MysqlService {
  private pool;

  constructor() {
    this.pool = mysql.createPool({
      host: 'localhost',
      port: 7777,
      user: 'user',
      password: '12345',
      database: 'primary',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }

  private isSafeSql(input: string): boolean {
    // Заменяем символы, которые могут быть использованы в SQL-инъекциях
    const sanitizedInput = input.replace(/['"]/g, '');

    // Сравниваем исходный ввод с очищенным вводом
    return input === sanitizedInput;
  }

  async query(sql: string, values?: any[]): Promise<any> {
    if (!this.isSafeSql(sql)) {
      throw new HttpException('SQL injections were found', 403);
    }

    const connection = await this.pool.getConnection();
    try {
      const [rows] = await connection.query(sql, values);
      console.log(rows);
      return rows;
    } finally {
      connection.release();
    }
  }

  async parallelQuery(sqlArray: string[], values?: any[]) {
    const connection = await this.pool.getConnection();

    try {
      await connection.beginTransaction();

      for (const query of sqlArray) {
        this.isSafeSql(query);

        await connection.query(query, values);
      }

      await connection.commit();
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }
}
