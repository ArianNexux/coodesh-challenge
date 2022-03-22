import { Events } from "./events"
import { Launches } from "./launches"

export type Articles = {

    id: number,
    featured: false,
    title: string,
    url: string,
    imageUrl: string,
    newsSite: string,
    summary: string,
    publishedAt: string,
    launches?: Launches[],
    events?: Events[]

}
