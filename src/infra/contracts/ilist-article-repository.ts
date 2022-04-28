import { Article } from "../../core/entities/article";
export interface IPagination {
    registPerPage: number
    pageNumber: number
}
export interface IListArticleRepository {
    listArticle(pagination: IPagination): Promise<Article[]>
}