import { DeleteArticleMongoDb } from "../../infra/mongodb/delete-article";
import Controller from "../../presentation/controllers/contracts/controller";
import DeleteArticleController from "../../presentation/controllers/delete-article";
import { DeleteArticleService } from "../../presentation/services/delete-article";
import { DeleteArticleRepository } from "../../repositories/delete-article";

export const FactoryDeleteArticleController = (): Controller => {
    const mongoDeleteArticle = new DeleteArticleMongoDb();
    const repositoryDeleteArticle = new DeleteArticleRepository(mongoDeleteArticle);
    const serviceDeleteArticle = new DeleteArticleService(repositoryDeleteArticle);
    return new DeleteArticleController(serviceDeleteArticle);
}