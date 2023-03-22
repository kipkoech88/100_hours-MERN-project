const express = require('express');
const loger = require('morgan');
const session = require('express-session');
const mongoose = require('mongoose');
const mongoConnect = require('connect-mongo')

//environment
require('dotenv').config({path: './config/.env'})

//Routers
//const homeRouter = require('./routers/home');

//
const app = express();
const PORT = process.env.PORT || 8000;

//midlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`)
})