var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var moviesRouter = require('./routes/movies');
var genresRouter = require('./routes/genres');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Session se inicia antes de las rutas
app.use(session(
  {
    secret:'udesamovie',
    saveUninitialized: true,
    resave: false
  }
));

//Pasar datos de session a las vistas. Usaremos un middleware de apolicación.
app.use(function(req, res, next){
  if(req.session.user != undefined){
    res.locals.user = req.session.user
    return next();
  }
  return next();
})



app.use('/', indexRouter);
app.use('/movies', moviesRouter);
app.use('/genres', genresRouter);
app.use('/users', usersRouter);

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
