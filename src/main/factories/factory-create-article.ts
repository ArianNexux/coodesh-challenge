import { CreateArticleMongoDb } from "../../infra/mongodb/create-article";
import Controller from "../../presentation/controllers/contracts/controller";
import CreateArticleController from "../../presentation/controllers/create-article";
import { CreateArticleService } from "../../presentation/services/create-article";
import { CreateArticleRepository } from "../../repositories/create-article";

export const FactoryCreateArticleController = (): Controller => {
    const mongoCreateArticle = new CreateArticleMongoDb();
    const repositoryCreateArticle = new CreateArticleRepository(mongoCreateArticle);
    const serviceCreateArticle = new CreateArticleService(repositoryCreateArticle);
    return new CreateArticleController(serviceCreateArticle);
}