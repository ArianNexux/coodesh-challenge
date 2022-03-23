import { Article } from "../../core/entities/article";
import { ICreateArticleRepository } from "../contracts/icreate-article-repository";
import { articleModel } from './schemas/article'
export class CreateArticleMongoDb implements ICreateArticleRepository{

    async addArticle(article: Article): Promise<Article> {
        const saveArticle = new articleModel(article);
        const res = await saveArticle.save();
        return res;
    }
    
}