var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/flash', (req,res) => {
  req.session.message = 'session';
  req.flash('message', 'flash m');

  res.redirect('/users/flash/result');
});

router.get('/flash/result', (req,res) => {
  res.send(`${req.session.message} ${req.flash('message')}`);
});

module.exports = router;
