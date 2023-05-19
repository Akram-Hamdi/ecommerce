const app = require('express')(),
    bodyParser = require('body-parser').json(),
    morgan = require('morgan')('dev'),
    dotenv = require('dotenv').config(),
    cors = require('cors')({
         origin: process.env.CORS_ORIGIN,
         credentials: true
    }),
    mongoose = require('mongoose'),
    cookieParser = require('cookie-parser')(),
    { PORT = 5000 } = process.env

mongoose.connect(process.env.DATABASE_URL)
app.use(bodyParser,morgan,cors,cookieParser)
app.use('/auth', require('./controllers'))
app.use('/api', require('./controllers'))
app.listen(PORT)
