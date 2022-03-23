import { Article } from "../../core/entities/article";
import { IDeleteArticleRepository } from "../contracts/idelete-article-repository";
import { articleModel } from './schemas/article'
export class DeleteArticleMongoDb implements IDeleteArticleRepository{

    async deleteArticle(id:number): Promise<boolean> {
        const articleFinded = await articleModel.findOneAndDelete({id});
        return articleFinded;
    }
    
}