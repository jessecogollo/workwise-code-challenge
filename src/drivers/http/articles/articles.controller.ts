import {
  Controller,
  Body,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ArticlesService } from '../../../domains/articles/articles.service';
import { Article } from '../../../domains/articles/articles.types';
import { UpdateResult } from 'typeorm';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}

  @Get()
  getArticles(): Promise<Array<Article>> {
    return this.articleService.findAll();
  }

  @Post()
  createArticle(@Body() body: Article): Promise<void> {
    return this.articleService.insert(body);
  }

  @Put()
  updateArticle(@Body() article: Article): Promise<UpdateResult | null> {
    return this.articleService.edit(article);
  }

  @Get(':id')
  getArticle(@Param('id') id: number): Promise<Article | null> {
    return this.articleService.findOneBy(id);
  }

  @Delete(':id')
  deleteArticle(@Param('id') id: number): Promise<void> {
    return this.articleService.delete(id);
  }
}
