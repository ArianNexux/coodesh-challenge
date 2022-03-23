import { Article } from "../../core/entities/article";
import { IListArticleRepository } from "../contracts/ilist-article-repository";
import { articleModel } from './schemas/article'
export class ListArticleMongoDb implements IListArticleRepository{
    
    async listArticle(): Promise<Article[]> {
        const res = await articleModel.find({})
        return res
    }
    
}