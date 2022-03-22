import { Article } from "../entities/article";

export interface UpdateArticle{
    updateArticle(id: string): Promise<Article>
}