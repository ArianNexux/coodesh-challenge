import { ListArticleById } from "../../core/usecases/list-articles-by-id";
import IService from "./contracts/IService";

export class ListArticleByIdService implements IService{
    constructor(
        private readonly listArticle : ListArticleById
    ){

    }

    async handle(id: number): Promise<any>{
       const result = await this.listArticle.listArticleById(id)
       return result
    }
}