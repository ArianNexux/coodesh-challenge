import { Article } from "../../core/entities/article";
import { IListArticleRepository, IPagination } from "../contracts/ilist-article-repository";
import { articleModel } from './schemas/article'
export class ListArticleMongoDb implements IListArticleRepository {

    async listArticle({ pageNumber, registPerPage }: IPagination): Promise<Article[]> {
        const res = await articleModel.find()
            .sort({ _id: 1 })
            .skip(pageNumber > 0 ? ((pageNumber - 1) * registPerPage) : 0)
            .limit(registPerPage)
        return res
    }

}