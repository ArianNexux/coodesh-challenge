import { Article } from "../../core/entities/article";

export interface IDeleteArticleRepository {
    deleteArticle(id: number): Promise<boolean>
}