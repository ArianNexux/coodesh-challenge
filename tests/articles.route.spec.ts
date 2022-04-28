import request from 'supertest'
import { connect, connection } from 'mongoose'
import { app } from '../src/main/server'
import { HttpResponse } from '../src/presentation/controllers/contracts/http'
describe('Test routes of articles', () => {
    beforeAll(async () => {
        await connect(`mongodb+srv://coodesh:${process.env.DB_PASSWORD}@cluster0.twujv.mongodb.net/myFirstDatabase`)
    })

    test('should create an article', async () => {
        const res: HttpResponse = await request(app)
            .post("/articles/")
            .send({
                id: 1,
                featured: true,
                title: "teste",
                url: "teste",
                imageUrl: "teste",
                newsSite: "teste",
                summary: "teste",
                publishedAt: "2021-05-13T00:48:12.000Z"
            }).set('Content-Type', 'application\/json')
        expect(res.statusCode).toBe(200)
    })

    test('should update a single article', async () => {
        const res: HttpResponse = await request(app)
            .put("/articles/1")
            .send({
                id: 1,
                featured: true,
                title: "teste-update",
                url: "teste-update",
                imageUrl: "teste-update",
                newsSite: "teste-update",
                summary: "teste-update",
                publishedAt: "2021-05-13T00:48:12.000Z"
            }).set('Content-Type', 'application\/json')
        expect(res.statusCode).toBe(200)
    })

    test('should return a list of articles', async () => {
        const res: HttpResponse = await request(app).get("/articles")
        expect(res.statusCode).toBe(200)
    })

    test('should return a single article', async () => {
        const res: HttpResponse = await request(app).get("/articles/1")
        expect(res.statusCode).toBe(200)
    })

    test('should delete an article', async () => {
        const res: HttpResponse = await request(app).delete("/articles/1")
        expect(res.statusCode).toBe(200)
    })



    afterAll(async () => {
        await connection.close()
    })
})