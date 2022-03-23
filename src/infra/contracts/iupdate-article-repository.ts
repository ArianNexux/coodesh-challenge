import { Article } from "../../core/entities/article";

export interface IUpdateArticleRepository {
    updateArticle(id: number, article: Article): Promise<Article>
}