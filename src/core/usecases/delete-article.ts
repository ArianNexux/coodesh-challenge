import { Article } from "../entities/article";

export interface DeleteArticle{
    deleteArticle(id: string): Promise<boolean>
}