import { Article } from "../../core/entities/article";
import { IUpdateArticleRepository } from "../contracts/iupdate-article-repository";
import { articleModel } from './schemas/article'
export class UpdateArticleMongoDb implements IUpdateArticleRepository{

    async updateArticle(id:number, article: Article): Promise<Article> {
        const articleFinded = await articleModel.findOneAndUpdate({id}, {
            $set:{
                ...article
            }
        });
        return articleFinded;
    }
    
}