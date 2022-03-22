import { Article } from "../../core/entities/article";

export interface ICreateArticleRepository {
    addArticle(article: Article): Promise<Article>
}