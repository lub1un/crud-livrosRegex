const express = require('express')
const mongoose = require('mongoose')
const  bodyParser = require('body-parser')

const bookRoutes = require('./routes/bookRoutes')
const authorRoutes = require('./routes/authorRoutes')

const app = express()
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true})

app.use('./books', bookRoutes)
app.use('./authors', authorRoutes)

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Server está rodando na porta ${PORT}`)
});