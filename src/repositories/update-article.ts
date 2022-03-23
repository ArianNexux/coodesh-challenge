import { Article } from '../core/entities/article';
import { UpdateArticle } from '../core/usecases/update-article'
import { IUpdateArticleRepository } from '../infra/contracts/iupdate-article-repository';

export class UpdateArticleRepository implements UpdateArticle{
    constructor(private readonly updateArticleRepository: IUpdateArticleRepository){

    }
    async updateArticle(id: number, article: Article): Promise<Article> {
       const res = await this.updateArticleRepository.updateArticle(id, article)
       return res;
    }

}