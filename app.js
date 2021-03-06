var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./app_server/models/db');
var passport = require('passport');

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var resultadosRouter = require('./app_server/routes/resultados');
var posicionesRouter = require('./app_server/routes/posiciones');
var editorRouter = require('./app_server/routes/editor');
var equiposRouter = require('./app_server/routes/planteles');
var apiRouter = require('./app_server/routes/api');
var videosRouter = require('./app_server/routes/videos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
	secret: "123456789",
	resave: true,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

require('./app_server/auth/facebook');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/resultados', resultadosRouter);
app.use('/equipos', equiposRouter);
app.use('/posiciones', posicionesRouter);
app.use('/editor', editorRouter);
app.use('/api',apiRouter);
app.use('/videos', videosRouter);

var authRouter = require('./app_server/routes/auth');
app.use('/auth', authRouter);


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
