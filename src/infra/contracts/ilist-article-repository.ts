import { Article } from "../../core/entities/article";

export interface IListArticleRepository {
    listArticle(): Promise<Article[]>
}