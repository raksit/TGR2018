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
  res.locals.myMCU = null;
  res.render('mcu', {
    users: users,
  });
});

router.get('/getall', function(req, res, next) {
  res.json(users);
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  for (var i = 0; i < users.length; i++) {
    if (users[i].id == id)
      res.json(users[i].name);
  }
});

router.post('/showresponse', function(req, res, next) {
  console.log("start");
  var mcu = {
    name: req.body.name,
    id: req.body.id
  }
  console.log(mcu);
  res.render('showresponse', {
   myMCU: mcu
  });
  // var newuser = req.body;
  // res.send('Add new ' + newuser.name + ' Completed!');
});

module.exports = router;
