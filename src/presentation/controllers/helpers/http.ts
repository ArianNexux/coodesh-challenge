import { HttpResponse } from "../contracts/http";
import { MissingParam } from "../errors/missing-param";

export const ok = (result: any): HttpResponse => {
    return {
        body: result,
        statusCode: 200
    }
}

export const unprocessableEntity = (param): HttpResponse => {
    return {
        body: new MissingParam(param),
        statusCode: 422
    }
}
