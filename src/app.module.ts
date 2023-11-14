import { Module } from '@nestjs/common';

import { MysqlConfigModule } from './drivers/mysql/mysql.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ArticlesModule } from './domains/articles/articles.module';
import { ArticlesController } from './drivers/http/articles/articles.controller';

@Module({
  imports: [MysqlConfigModule, ArticlesModule],
  controllers: [AppController, ArticlesController],
  providers: [AppService],
})
export class AppModule {}
