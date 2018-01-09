var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.get('/', function(req, res, next) {
  res.locals.myMCU = null;
  res.render('mcu', {
    users: users,
  });
});
