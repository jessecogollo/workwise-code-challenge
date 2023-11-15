import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Articles } from './articles.entity';
import { Article as ArticleDTO, ArticleRepository } from './articles.types';

@Injectable()
export class ArticlesService implements ArticleRepository {
  constructor(
    @InjectRepository(Articles)
    private articlesRepository: Repository<Articles>,
  ) {}

  findAll(): Promise<Articles[]> {
    return this.articlesRepository.find({
      select: [
        'id',
        'title',
        'author',
        'published_at',
        'created_at',
        'updated_at',
      ],
    });
  }

  async insert(article: ArticleDTO): Promise<void> {
    await this.articlesRepository.insert(article);
  }

  async edit(article: ArticleDTO): Promise<ArticleDTO | null> {
    await this.articlesRepository.update(article.id, article);
    return this.articlesRepository.findOneBy({ id: article.id });
  }

  async findOneBy(id: number): Promise<Articles | null> {
    return this.articlesRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await this.articlesRepository.delete({ id });
  }
}
