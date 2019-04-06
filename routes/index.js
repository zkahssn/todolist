var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Zakia\'s application' });
});

/* GET Weekly Planner. */
router.get('/newweek', function(req, res, next) {
  res.render('form', { title: 'Zakia\'s application' });
});

/* POST home page. */
router.post('/', function(req, res, next) {
  res.send('You have posted a form!');
});

/* POST weekly planner. */
router.post('/newweek', function(req, res, next) {
  console.log(req.body['action'])
  res.send(req.body['action']);
});

module.exports = router;
