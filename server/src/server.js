require('dotenv').config()
const http = require('http');
const app = require('./app');
const connectDB = require('./services/mongo')

const PORT = process.env.PORT || 5000

const server = http.createServer(app)

const startServer = ()=>{
    server.listen(PORT, async()=>{
        console.log(`listening on port ${PORT}`)
        await connectDB()
    })
}

startServer()