import { FactoryCreateArticleController } from "../main/factories/factory-create-article"
import { connect, connection } from 'mongoose'
import 'dotenv/config'
import { HttpRequest, HttpResponse } from '../presentation/controllers/contracts/http'


describe('Create Article', () => {
    beforeAll(async () => {
        await connect(`mongodb+srv://coodesh:${process.env.DB_PASSWORD}@cluster0.twujv.mongodb.net/myFirstDatabase`)
    })
    test('should return 422 if no title is provided', async () => {
        const sut = FactoryCreateArticleController()
        const httpRequest: HttpRequest = {
            body: {
                id: 1,
                featured: true,
                url: "teste",
                imageUrl: "teste",
                newsSite: "teste",
                summary: "teste",
                publishedAt: "2021-05-13T00:48:12.000Z"
            }
        }
        const httpResponse: HttpResponse = await sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(422)
    })

    test('should return 422 if no url is provided', async () => {
        const sut = FactoryCreateArticleController()
        const httpRequest: HttpRequest = {
            body: {
                id: 1,
                featured: true,
                title: "teste",
                imageUrl: "teste",
                newsSite: "teste",
                summary: "teste",
                publishedAt: "2021-05-13T00:48:12.000Z"
            }
        }
        const httpResponse: HttpResponse = await sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(422)
    })
    afterAll(async () => {
        await connection.close()
    })
})