var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require('express-session');
const flash = require('connect-flash');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('common'));
app.use(express.static(path.join(__dirname, 'public')));  //이런 건 먼저 처리하는게 좋다.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'secret code',
  cookie: {
    httpOnly: true,
    secure: false
  }
}));
app.use(flash());

//app.use(express.static(path.join(__dirname, 'public')));

//app.use(logger('dev'), express.json(), express.urlencoded({ extended: false }) ...); 이렇게도 사용가능.. 그런데 분리해서 쓰는게 보기 좋음.

// 커스텀 미들웨어
app.use((req, res, next) => {
  console.log(req.url, '저도 미들웨어 입니다.');
  next();
});

// app.use((req, res, next) => {
//   if(+new Date  % 2 === 0) {
//     return res.status(404).send('50% 실패');
//   } else {
//     next();
//   }
// }, (req, res, next) => {
//   console.log('50% 성공');
//   next();
// });


app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/test', (req, res, next) => {
  console.log('get test');

  next();
});


app.post('/test', (req, res, next) => {
  console.log('post test');

  next();
});

app.put('/test', (req, res, next) => {
  console.log('put test');

  next();
});

app.delete('/test', (req, res, next) => {
  console.log('delete test');

  next();
});


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
