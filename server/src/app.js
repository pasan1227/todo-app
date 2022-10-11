const express = require('express');
const cors = require('cors');
const api = require('./routes/api')

const app = express();
app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use('/api', api)


app.get('/', (req, res) => {
    res.send('API is running')
})

module.exports = app