import { ListArticles } from "../../core/usecases/list-articles";
import IService from "./contracts/IService";

export class ListArticleService implements IService{
    constructor(
        private readonly listArticle : ListArticles
    ){

    }

    async handle(): Promise<any>{
       const result = await this.listArticle.listArticle()
       return result
    }
}