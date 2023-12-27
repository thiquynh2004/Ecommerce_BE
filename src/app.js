const express = require('express');
const morgan = require('morgan');
const {default: helmet} = require('helmet')
const app = express(); 

//init middlewares
app.use(morgan("dev"))

app.use(helmet())

//init db

//init routes

app.get('/', (req, res, next) => {
    return res.status(500).json({
        message: 'Welcome'
    })
})
// init error

module.exports = app