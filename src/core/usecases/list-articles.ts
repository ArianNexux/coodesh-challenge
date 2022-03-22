import { Article } from "../entities/article";

export interface ListArticles{
    listArticle(): Promise<Article[]>
}