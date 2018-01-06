var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  request('https://jsonplaceholder.typicode.com/users', function(error, response, body) {
      // res.json(body);
      var data = JSON.parse(body);
      // res.send(body);
      res.render('request', {
        data: data,
      });
  });
});

module.exports = router;
