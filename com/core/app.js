var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
const loggingMW = require('./middleware/logging')


// Setting up the router calls from the services
// ***********************************************************************

// View Imports
var indexview = require('./views/index/index');


// Services
var auth = require('./services/auth/index');
var user = require('./services/user/index');
var category = require('./services/categories/index');
var articles = require('./services/articles/index');



// ***********************************************************************

var app = express();

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'jade');

//Body Parsing
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger('dev'));
app.use( (req, res, next) => {
  console.log(req.originalUrl);
  loggingMW.logRequest(req.originalUrl);
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../lib/public')));


// Set the router to the path
// ***********************************************************************

// Path Registration ------------------------
app.use('/', indexview.routes);

// Service Registration ----------------------
app.use('/auth', auth.routes);
app.use('/users', user.routes);
app.use('/category', category.routes);
app.use('/articles', articles.routes);



// ***********************************************************************

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
