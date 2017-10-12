const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
var morgan = require('morgan')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/hacktivoverflow')

const app = express()

app.use(morgan('dev'))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const threads = require('./Routers/Threads');
const users = require('./Routers/Users');
const login = require('./Routers/Auth');


app.use('/api/threads', threads)
app.use('/api/users', users)
app.use('/api/login', login)

app.listen(process.env.PORT || 3000)
