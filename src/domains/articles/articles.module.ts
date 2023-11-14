import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MysqlConfigModule } from '../../drivers/mysql/mysql.module';
import { Articles } from './articles.entity';
import { ArticlesService } from './articles.service';

@Module({
  imports: [MysqlConfigModule, TypeOrmModule.forFeature([Articles])],
  exports: [TypeOrmModule, ArticlesService],
  providers: [ArticlesService],
})
export class ArticlesModule {}
