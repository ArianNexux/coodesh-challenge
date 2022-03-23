import { Article } from "../../core/entities/article";
import { IListArticleByIdRepository } from "../contracts/ilist-article-by-id-repository";
import { articleModel } from './schemas/article'
export class ListArticleByIdMongoDb implements IListArticleByIdRepository{
    
    async listArticleById(id: number): Promise<any> {
        const res = await articleModel.find({id: id})
        return res;
    }
    
}