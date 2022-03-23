import { FactoryCreateArticleController } from "../main/factories/factory-create-article"
import { HttpRequest, HttpResponse } from '../presentation/controllers/contracts/http'
describe('Create Article', () => { 

    test('should return 422 if no title is provided', async () => { 
        const sut = FactoryCreateArticleController()
        const httpRequest: HttpRequest = {
            body: {
                id: 1,
                featured: true,
                url: "teste",
                imageUrl:"teste",
                newsSite: "teste",
                summary:"teste",
                publishedAt: "2021-05-13T00:48:12.000Z"
            }
        }
        const httpResponse: HttpResponse = await sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(422)
     })
 })