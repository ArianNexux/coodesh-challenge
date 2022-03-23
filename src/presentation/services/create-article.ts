import { CreateArticle } from "../../core/usecases/create-article";
import IService from "./contracts/IService";

export class CreateArticleService implements IService{
    constructor(
        private readonly createArticle : CreateArticle
    ){

    }

    async handle(article: any): Promise<any>{
       const result = await this.createArticle.addArticle(article)
       return result
    }
}