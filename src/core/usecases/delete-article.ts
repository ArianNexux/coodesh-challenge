import { Article } from "../entities/article";

export interface DeleteArticle{
    deleteArticle(id: number): Promise<boolean>
}
