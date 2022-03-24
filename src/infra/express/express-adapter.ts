import Controller from "../../presentation/controllers/contracts/controller";
import { HttpRequest, HttpResponse } from "../../presentation/controllers/contracts/http";
import { Request, Response } from "express";

export const expressAdapter = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            body: req.body,
            params: req.params
        }

        const response: HttpResponse = await controller.handle(httpRequest)

        res.status(response.statusCode).json(response.body)
    }
}