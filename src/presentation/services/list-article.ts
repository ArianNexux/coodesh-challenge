import { ListArticles } from "../../core/usecases/list-articles";
import { IPagination } from "../../infra/contracts/ilist-article-repository";
import IService from "./contracts/IService";

export class ListArticleService implements IService {
    constructor(
        private readonly listArticle: ListArticles
    ) {

    }

    async handle(pagination: IPagination): Promise<any> {
        const result = await this.listArticle.listArticle(pagination)
        return result
    }
}