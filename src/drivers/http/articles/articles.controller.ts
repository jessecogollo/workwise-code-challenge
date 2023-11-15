import {
  Controller,
  Body,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { Validate } from 'nestjs-typebox';
import { Type } from '@sinclair/typebox';

import { ArticlesService } from '../../../domains/articles/articles.service';
import { Article, ArticleDTO } from '../../../domains/articles/articles.types';
import { UpdateResult } from 'typeorm';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}

  @Get()
  @HttpCode(200)
  @Validate({
    response: Type.Array(ArticleDTO),
  })
  getArticles(): Promise<Array<Article>> {
    return this.articleService.findAll();
  }

  @Post()
  @HttpCode(201)
  @Validate({
    request: [
      {
        type: 'body',
        schema: Type.Omit(ArticleDTO, ['id', 'created_at', 'updated_at']),
      },
    ],
    response: Type.Void(),
  })
  createArticle(@Body() body: Article): Promise<void> {
    return this.articleService.insert(body);
  }

  @Put()
  @HttpCode(200)
  @Validate({
    request: [{ type: 'body', schema: Type.Partial(ArticleDTO) }],
    response: Type.Any(),
  })
  updateArticle(@Body() body: Article): Promise<UpdateResult> {
    return this.articleService.edit(body);
  }

  @Get(':id')
  @HttpCode(200)
  @Validate({
    request: [{ name: 'id', type: 'param', schema: Type.Number() }],
    response: ArticleDTO,
  })
  getArticle(@Param('id') id: number): Promise<Article | null> {
    return this.articleService.findOneBy(id);
  }

  @Delete(':id')
  @HttpCode(204)
  @Validate({
    request: [{ name: 'id', type: 'param', schema: Type.Number() }],
    response: Type.Void(),
  })
  deleteArticle(@Param('id') id: number): Promise<void> {
    return this.articleService.delete(id);
  }
}
