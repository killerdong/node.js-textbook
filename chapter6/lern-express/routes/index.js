var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {
  console.log(req.params, req.query);
  res.render('index', { title: 'Express' });
});

//get, put, delete, post 등 함수 사용 가능
//app.use와 같이 여러 개의 미들웨어를 붙여서 사용 가능
router.get('/test_a', (req, res, next) => {
  console.log('test1111');
  next();
}, (req, res, next) => {
  res.render('index', { title: 'Test' });
});


//next에 route를 입력할 경우 다음 라우터로 이동
router.get('/test_r', (req, res, next) => {
  console.log('test1111');
  next('route');
}, (req, res, next) => {
  console.log('실행 안됨');
  res.render('index', { title: '실행 안됨' });
});

router.get('/test_r', (req, res, next) => {
  console.log('실행됨1');
  next();
}, (req, res, next) => {
  console.log('실행됨2');
  res.render('index', { title: '실행됨' });
});

module.exports = router;
