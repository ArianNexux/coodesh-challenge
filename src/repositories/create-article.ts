import { Article } from '../core/entities/article';
import { CreateArticle } from '../core/usecases/create-article'
import { ICreateArticleRepository } from '../infra/contracts/icreate-article-repository';

export class CreateArticleRepository implements CreateArticle{
    constructor(private readonly createArticleRepository: ICreateArticleRepository){

    }
    async addArticle(article: Article): Promise<Article> {
       const res = await this.createArticleRepository.addArticle(article)
       return res;
    }

}