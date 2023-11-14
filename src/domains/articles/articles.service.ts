import { Injectable } from '@nestjs/common';

import { Article, ArticleRepository } from './articles.types';

@Injectable()
export class ArticlesService implements ArticleRepository {
  findAll(): Promise<Article[]> {
    return Promise.resolve([
      {
        id: 123,
        title: 'title',
        author: 'author',
        created_at: new Date(),
        published_at: new Date(),
      },
    ]);
  }

  insert(article: Article): Promise<void> {
    console.log('insert article', article);
    return Promise.resolve();
  }

  edit(article: Article): Promise<Article | null> {
    console.log('edit article', article);
    return Promise.resolve(null);
  }

  findOneBy(id: number): Promise<Article | null> {
    return Promise.resolve({
      id: id,
      title: 'title',
      author: 'author',
      text: 'text',
      created_at: new Date(),
      published_at: new Date(),
    });
  }

  delete(id: number): Promise<void> {
    console.log('delete id', id);
    return Promise.resolve();
  }
}
