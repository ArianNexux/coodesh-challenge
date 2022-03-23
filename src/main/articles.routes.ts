import { connect } from 'mongoose'
import 'dotenv/config'
import { Router } from 'express'
import { expressAdapter } from '../infra/express/express-adapter'
import { FactoryListArticleController } from './factories/factory-list-article'
import { FactoryCreateArticleController } from './factories/factory-create-article'
import { FactoryListArticleByIdController } from './factories/factory-list-article-by-id'
import { FactoryUpdateArticleController } from './factories/factory-update-article'
import { FactoryDeleteArticleController } from './factories/factory-delete-article'

export const ArticlesRoutes = Router()

ArticlesRoutes.get('/articles/', expressAdapter(FactoryListArticleController()))
ArticlesRoutes.post('/articles/', expressAdapter(FactoryCreateArticleController()))
ArticlesRoutes.get('/articles/:id', expressAdapter(FactoryListArticleByIdController()))
ArticlesRoutes.put('/articles/:id', expressAdapter(FactoryUpdateArticleController()))
ArticlesRoutes.delete('/articles/:id', expressAdapter(FactoryDeleteArticleController()))

