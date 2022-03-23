import { UpdateArticle } from "../../core/usecases/update-article";
import IService from "./contracts/IService";

export class UpdateArticleService implements IService{
    constructor(
        private readonly createArticle : UpdateArticle
    ){

    }

    async handle(id: number, article: any): Promise<any>{
       const result = await this.createArticle.updateArticle(id, article)
       return result
    }
}