import { Article } from '../core/entities/article';
import { ListArticles } from '../core/usecases/list-articles'
import { IListArticleRepository } from '../infra/contracts/ilist-article-repository';

export class ListArticleRepository implements ListArticles{
    constructor(private readonly listArticleRepository: IListArticleRepository){

    }
    async listArticle(): Promise<Article[]> {
       const res = await this.listArticleRepository.listArticle()
       return res;
    }

}