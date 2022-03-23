import IService from "../services/contracts/IService";
import Controller from "./contracts/controller";
import { HttpRequest, HttpResponse } from "./contracts/http";
import { ok } from "./helpers/http";


export default class UpdateArticleController implements Controller{
    constructor(private readonly service: IService){

    }
    
    async handle(request: HttpRequest): Promise<HttpResponse> {
        const res = await this.service.handle(request.params.id, request.body)
        return ok(res);
    }
    
}