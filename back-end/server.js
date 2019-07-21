import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'

import router from './router'
const port = 3000

// Connect to MongoDB
mongoose.connect('mongodb://localhost/movies', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
})

const app = express()

app.use(morgan('combined'))

// Use v1 as prefix for all API endpoints
app.use('/v1', router)

const server = app.listen(3000, () => {
    const { address, port } = server.address();
    console.log(`Listening at http://${address}:${port}`);
})