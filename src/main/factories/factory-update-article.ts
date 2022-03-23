import { UpdateArticleMongoDb } from "../../infra/mongodb/update-article";
import Controller from "../../presentation/controllers/contracts/controller";
import updateArticleController from "../../presentation/controllers/update-article";
import { UpdateArticleService } from "../../presentation/services/update-article";
import { UpdateArticleRepository } from "../../repositories/update-article";

export const FactoryUpdateArticleController = (): Controller => {
    const mongoupdateArticle = new UpdateArticleMongoDb();
    const repositoryupdateArticle = new UpdateArticleRepository(mongoupdateArticle);
    const serviceupdateArticle = new UpdateArticleService(repositoryupdateArticle);
    return new updateArticleController(serviceupdateArticle);
}