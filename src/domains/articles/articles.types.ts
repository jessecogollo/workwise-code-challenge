import { Type, Static } from '@sinclair/typebox';

export const ArticleDTO = Type.Object({
  id: Type.Optional(Type.Number()),
  title: Type.String(),
  author: Type.String(),
  text: Type.Optional(Type.String()),
  created_at: Type.Date(),
  published_at: Type.Date(),
});

export type Article = Static<typeof ArticleDTO>;

export interface ArticleRepository {
  findAll(): Promise<Article[]>;
  insert(article: Article): Promise<void>;
  edit(article: Article): Promise<Article | null>;
  findOneBy(id: number): Promise<Article | null>;
  delete(id: number): Promise<void>;
}
