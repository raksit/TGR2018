var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

var users = [{
    name: 'EJS',
    id: 1
  },
  {
    name: 'Node.js',
    id: 2
  },
  {
    name: 'express',
    id: 3
  }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {
    users: users,
  });
});

router.get('/getall', function(req, res, next) {
  res.json(users);
});

router.get('/geta', function(req, res, next) {
  var user_id = req.param('id');
  res.send(user_id);
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  for (var i = 0; i < users.length; i++) {
    if (users[i].id == id)
      res.json(users[i].name);
  }
});

router.post('/insert', function(req, res, next) {
  var newuser = req.body;
  res.send('Add new ' + newuser.name + ' Completed!');
});

module.exports = router;
