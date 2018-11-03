
//Inisialiasi package apa yang akan kita pakai
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var logger = require('morgan');
var flash = require('express-flash');
var session = require('express-session');


/*var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');*/

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'B3rnando',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(flash());


// kita ga butuh ini karena route sudah di handle di folder controller
/*app.use('/', indexRouter);
app.use('/users', usersRouter);
*/



// Untuk menghandle route di controller kita perlu menggunakan script ini
// Require file system module 
var fs = require('file-system');
fs.readdirSync('controllers').forEach(function (file) {  
  if(file.substr(-3) == '.js') {    
    const route = require('./controllers/' + file)   
     route.controller(app)  } 
})


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

app.listen(3000, function() { console.log('listening on 3000') });

module.exports = app;
