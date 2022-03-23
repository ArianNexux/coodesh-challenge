import { Article } from "../entities/article";

export interface ListArticleById{
    listArticleById(id: number): Promise<Article>
}