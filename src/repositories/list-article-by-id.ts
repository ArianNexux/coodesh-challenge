import { Article } from '../core/entities/article';
import { ListArticleById } from '../core/usecases/list-articles-by-id'
import { IListArticleByIdRepository } from '../infra/contracts/ilist-article-by-id-repository';

export class ListArticleByIdRepository implements ListArticleById{
    constructor(private readonly listArticleByIdRepository: IListArticleByIdRepository){

    }
    async listArticleById(id: number): Promise<Article> {
       const res = await this.listArticleByIdRepository.listArticleById(id)
       return res;
    }

}