import express from 'express'

// HTTP request logger middleware for node.js
import morgan from 'morgan'

import mongoose from 'mongoose'

import router from './router'

// Connect to MongoDB
mongoose.connect('mongodb://localhost/movies')

const app = express()

app.use(morgan('combined'))
// Use v1 as prefix for all API endpoints
app.use('/v1', router)

// app.get('/', (req, res) =>
//     res.send('Hello, World!')
// )

const server = app.listen(3000, () => {
    const { address, port } = server.address()
    console.log(`Listening at http://${address}:${port}`)

})