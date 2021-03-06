process.env.NODE_ENV || (process.env.NODE_ENV = 'development')

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var app = express();
const {common} = require('./configs')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
ejs.delimiter = '$';
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

switch (process.env.NODE_ENV) {
    case 'development':
        app.use(`${common.routePrefix}/webroot`, express.static(path.join(__dirname, 'public')));
        break;
    default:
        app.use(`${common.routePrefix}/webroot`, express.static(path.join(__dirname, 'statics')));
}

require('./routes')(app)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error.html');
});

module.exports = app;
