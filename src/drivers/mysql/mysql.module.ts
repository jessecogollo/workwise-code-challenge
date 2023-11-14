import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import mysql from './mysql.provider';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [mysql],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('mysql'),
    }),
  ],
})
export class MysqlConfigModule {}
