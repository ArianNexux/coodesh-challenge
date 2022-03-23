import { DeleteArticle } from "../../core/usecases/delete-article";
import IService from "./contracts/IService";

export class DeleteArticleService implements IService{
    constructor(
        private readonly deleteArticle : DeleteArticle
    ){

    }

    async handle(id: number): Promise<any>{
       const result = await this.deleteArticle.deleteArticle(id)
       return result
    }
}