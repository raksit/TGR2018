var express = require('express');
var router = express.Router();

var user = require('../models/user-schema');
var db = require('../models/dbconnect');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// create a new user
var John = new user({
  name: 'John',
  username: 'johnuser',
  password: 'johnpassword',
  admin: true,
});

var Jane = new user({
  name: 'Jane',
  username: 'janeuser',
  password: 'janepassword'
});
// save method to save to the database
// Jane.save(function(err) {
//   if (err) throw err;
//
//   console.log('User created!');
// });

// get all the users
user.find({}, function(err, users) {
  if (err) throw err;
  // console.log(users);
});

// get the user is johnuser
user.find({ username: 'johnuser' }, function(err, user) {
  if (err) throw err;

  // object of the user
  // console.log(user);
});

user.findOneAndUpdate({ username: 'janeuser' }, { created_at: new Date() }, function(err, user) {
  if (err) throw err;

  // we have the updated user returned to us
  // console.log('Update'+user);
});

// get the date 1 month ago
var hourAgo = new Date();
hourAgo.setHours(hourAgo.getHours() - 1);

user.find({ name: 'Jane'}).where('created_at').gt(hourAgo).exec(function(err, users) {
  if (err) throw err;

  // show user in the past hour
  console.log(new Date()+users);
});

module.exports = router;
