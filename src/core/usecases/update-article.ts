import { Article } from "../entities/article";

export interface UpdateArticle{
    updateArticle(id: number, article: Article): Promise<Article>
}