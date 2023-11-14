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
  updateArticle(@Body() article: Article): Promise<Article | null> {
    return this.articleService.edit(article);
  }

  @Get(':id')
  getArticle(@Param() id: number): Promise<Article | null> {
    console.log('getArticle', id);
    return this.articleService.findOneBy(id);
  }

  @Delete(':id')
  deleteArticle(@Param() id: number): Promise<void> {
    return this.articleService.delete(id);
  }
}
