import { Schema, model } from 'mongoose'


const articleSchema = new Schema({
    id: Number,
    featured: Boolean,
    title: String,
    url: String,
    imageUrl: String,
    newsSite: String,
    summary: String,
    publishedAt: Date,
    launches: [],
    events: []
})


export const articleModel = model('articles', articleSchema)