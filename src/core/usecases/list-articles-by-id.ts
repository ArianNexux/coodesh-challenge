import { Article } from "../entities/article";

export interface ListArticleById{
    listArticleById(id: string): Promise<Article>
}