import { FactoryCreateArticleController } from "../main/factories/factory-create-article"
import { connect, connection } from 'mongoose'
import 'dotenv/config'
import { HttpRequest, HttpResponse } from '../presentation/controllers/contracts/http'


describe('Create Article', () => {

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

    test('should return 422 if no imageUrl is provided', async () => {
        const sut = FactoryCreateArticleController()
        const httpRequest: HttpRequest = {
            body: {
                id: 1,
                featured: true,
                title: "teste",
                url: "teste",
                newsSite: "teste",
                summary: "teste",
                publishedAt: "2021-05-13T00:48:12.000Z"
            }
        }
        const httpResponse: HttpResponse = await sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(422)
    })

    test('should return 422 if no newsSite is provided', async () => {
        const sut = FactoryCreateArticleController()
        const httpRequest: HttpRequest = {
            body: {
                id: 1,
                featured: true,
                title: "teste",
                url: "teste",
                imageUrl: "teste",
                summary: "teste",
                publishedAt: "2021-05-13T00:48:12.000Z"
            }
        }
        const httpResponse: HttpResponse = await sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(422)
    })

    test('should return 422 if no summary is provided', async () => {
        const sut = FactoryCreateArticleController()
        const httpRequest: HttpRequest = {
            body: {
                id: 1,
                featured: true,
                title: "teste",
                url: "teste",
                imageUrl: "teste",
                newsSite: "teste",
                publishedAt: "2021-05-13T00:48:12.000Z"
            }
        }
        const httpResponse: HttpResponse = await sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(422)
    })

    test('should return 422 if no summary is featured', async () => {
        const sut = FactoryCreateArticleController()
        const httpRequest: HttpRequest = {
            body: {
                id: 1,
                summary: "teste",
                title: "teste",
                url: "teste",
                imageUrl: "teste",
                newsSite: "teste",
                publishedAt: "2021-05-13T00:48:12.000Z"
            }
        }
        const httpResponse: HttpResponse = await sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(422)
    })



})