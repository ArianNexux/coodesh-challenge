import { Article } from '../core/entities/article';
import { ListArticles } from '../core/usecases/list-articles'
import { IListArticleRepository, IPagination } from '../infra/contracts/ilist-article-repository';

export class ListArticleRepository implements ListArticles {
    constructor(private readonly listArticleRepository: IListArticleRepository) {

    }
    async listArticle(pagination: IPagination): Promise<Article[]> {
        const res = await this.listArticleRepository.listArticle(pagination)
        return res;
    }

}