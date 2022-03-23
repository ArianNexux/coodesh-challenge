import { ListArticleMongoDb } from "../../infra/mongodb/list-article";
import Controller from "../../presentation/controllers/contracts/controller";
import ListArticleController from "../../presentation/controllers/list-article";
import { ListArticleService } from "../../presentation/services/list-article";
import { ListArticleRepository } from "../../repositories/list-article";

export const FactoryListArticleController = (): Controller => {
    const mongoListArticle = new ListArticleMongoDb();
    const repositoryListArticle = new ListArticleRepository(mongoListArticle);
    const serviceListArticle = new ListArticleService(repositoryListArticle);
    return new ListArticleController(serviceListArticle);
}