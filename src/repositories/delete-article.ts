import { Article } from '../core/entities/article';
import { DeleteArticle } from '../core/usecases/delete-article'
import { IDeleteArticleRepository } from '../infra/contracts/idelete-article-repository';

export class DeleteArticleRepository implements DeleteArticle{
    constructor(private readonly deleteArticleRepository: IDeleteArticleRepository){

    }
    async deleteArticle(id: number): Promise<boolean> {
       const res = await this.deleteArticleRepository.deleteArticle(id)
       return res;
    }

}