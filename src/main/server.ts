import { connect } from 'mongoose'
import 'dotenv/config'
import express from  'express'
import { expressAdapter } from '../infra/express/express-adapter'
import { FactoryListArticleController } from './factories/factory-list-article'
import { FactoryCreateArticleController } from './factories/factory-create-article'
import { FactoryListArticleByIdController } from './factories/factory-list-article-by-id'
import { FactoryUpdateArticleController } from './factories/factory-update-article'
import { FactoryDeleteArticleController } from './factories/factory-delete-article'

const app =  express()

app.use(express.json())

app.get('/articles/', expressAdapter(FactoryListArticleController()))
app.post('/articles/', expressAdapter(FactoryCreateArticleController()))
app.get('/articles/:id', expressAdapter(FactoryListArticleByIdController()))
app.put('/articles/:id', expressAdapter(FactoryUpdateArticleController()))
app.delete('/articles/:id', expressAdapter(FactoryDeleteArticleController()))

connect(`mongodb+srv://coodesh:${process.env.DB_PASSWORD}@cluster0.twujv.mongodb.net/myFirstDatabase`).then(()=>{
    app.listen(3000, function(){
        console.log("Running on 3000 Port")
    })
}).catch((err)=>{
    console.log(err)
})