import IService from "../services/contracts/IService";
import Controller from "./contracts/controller";
import { HttpRequest, HttpResponse } from "./contracts/http";
import { ok } from "./helpers/http";
import { IPagination } from "../../infra/contracts/ilist-article-repository";

export default class ListArticleController implements Controller {
    constructor(private readonly service: IService) {

    }
    async handle(request: HttpRequest): Promise<HttpResponse> {

        let pagination: IPagination = {
            registPerPage: request.params.total,
            pageNumber: request.params.page
        }

        const res = await this.service.handle(pagination)
        return ok(res);
    }

}