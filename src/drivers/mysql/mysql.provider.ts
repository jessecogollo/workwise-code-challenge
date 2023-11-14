import { DataSource, DataSourceOptions } from 'typeorm';
import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';

import { Articles } from '../../domains/articles/articles.entity';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: 'local.env' });
}

const config = {
  type: 'mysql',
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: 'workwise',
  entities: [Articles],
  synchronize: false,
  migrationsRun: false,
  migrationsTableName: 'migrations',
  migrations: ['src/drivers/mysql/migrations/*{.ts,.js}'],
};

export default registerAs('mysql', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
