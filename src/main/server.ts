import { connect } from 'mongoose'
import 'dotenv/config'
import express from 'express'
import { ArticlesRoutes } from './express/articles.routes'
import { job } from '../utils/feed-db'
export const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(ArticlesRoutes)
connect(`mongodb+srv://coodesh:${process.env.DB_PASSWORD}@cluster0.twujv.mongodb.net/myFirstDatabase`).then(() => {
    app.listen(3000, function () {
        console.log("Running on 3000 Port")
        job.start();
    })

}).catch((err) => {
    console.log(err)
})