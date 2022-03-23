import { ListArticleByIdMongoDb } from "../../infra/mongodb/list-article-by-id";
import Controller from "../../presentation/controllers/contracts/controller";
import ListArticleByIdController from "../../presentation/controllers/list-article-by-id";
import { ListArticleByIdService } from "../../presentation/services/list-article-by-id";
import { ListArticleByIdRepository } from "../../repositories/list-article-by-id";

export const FactoryListArticleByIdController = (): Controller => {
    const mongoListArticle = new ListArticleByIdMongoDb();
    const repositoryListArticle = new ListArticleByIdRepository(mongoListArticle);
    const serviceListArticle = new ListArticleByIdService(repositoryListArticle);
    return new ListArticleByIdController(serviceListArticle);
}