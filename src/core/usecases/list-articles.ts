import { IPagination } from "../../infra/contracts/ilist-article-repository";
import { Article } from "../entities/article";

export interface ListArticles {
    listArticle(pagination: IPagination): Promise<Article[]>
}