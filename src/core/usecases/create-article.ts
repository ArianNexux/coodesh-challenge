import { Article } from "../entities/article";

export interface CreateArticle{
    addArticle(article: Article): Promise<Article>
}