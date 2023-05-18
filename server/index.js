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
    { PORT = 3000 } = process.env


app.use(bodyParser,morgan,cors,cookieParser)
app.listen(PORT)
