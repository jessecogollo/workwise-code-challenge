import { Type, Static } from '@sinclair/typebox';
// import { UpdateResult } from 'typeorm';

export const ArticleDTO = Type.Object({
  id: Type.Number(),
  title: Type.String(),
  author: Type.String(),
  text: Type.Optional(Type.String()),
  created_at: Type.Date(),
  published_at: Type.String(),
  updated_at: Type.Date(),
});

export type Article = Static<typeof ArticleDTO>;

export interface ArticleRepository {
  findAll(): Promise<Article[]>;
  insert(article: Article): Promise<void>;
  edit(article: Article): Promise<any>;
  findOneBy(id: number): Promise<Article | null>;
  delete(id: number): Promise<void>;
}
