//this section was to test db connection
//but it makes no sense to store this in
//the splash page so it has been moved to login
//where it will be used
//and a value can be set in memory
//load env variables
// require('dotenv').config()
// var pgp = require('pg-promise')()
// var db = pgp(`${process.env.DATABASE_URL}`);
var { Client } = require("pg");
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login')
var app = express();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl:true,
})

client.connect().catch((err)=>console.error(err))

client.query('SELECT * FROM users WHERE name=\'thomas\';',(err,res)=>{
  if(err){
    throw err;
  }
  for(let row of res.rows){
    console.log(JSON.stringify(row))
  }
  client.end()
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
