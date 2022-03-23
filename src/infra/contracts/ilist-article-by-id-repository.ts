import { Article } from "../../core/entities/article";

export interface IListArticleByIdRepository {
    listArticleById(id: number): Promise<Article>
}