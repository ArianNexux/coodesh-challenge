import IService from "../services/contracts/IService";
import Controller from "./contracts/controller";
import { HttpRequest, HttpResponse } from "./contracts/http";
import { ok, unprocessableEntity } from "./helpers/http";


export default class CreateArticleController implements Controller {
    constructor(private readonly service: IService) {

    }

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const requiredFields = ['title'];
        for (const field in requiredFields) {
            if (!request.body[field]) {
                return unprocessableEntity(field)
            }
        }

        const res = await this.service.handle(request.body)

        return ok(res);
    }

}