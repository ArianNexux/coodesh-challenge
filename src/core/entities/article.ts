import { Event } from "./event"
import { Launch } from "./launche"

export type Article = {

    id: number,
    featured: false,
    title: string,
    url: string,
    imageUrl: string,
    newsSite: string,
    summary: string,
    publishedAt: string,
    launches?: Launch[],
    events?: Event[]

}
