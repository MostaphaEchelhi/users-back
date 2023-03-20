var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const MongoClient = require("mongodb").MongoClient;

var app = express();

app.use(cors());

MongoClient.connect("mongodb://127.0.0.1:27017")
.then(client => {
    console.log("DB är ok");

    const db = client.db("projekt1")
    app.locals.db = db;

})
.catch(err => console.log("err", err))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
