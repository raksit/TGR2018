// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
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

  res.render('index', {
    users: users,
    title: 'TITLE EJS'
  });
});


// about page
app.get('/about', function(req, res) {
  res.render('about');
});

app.listen(8080);
console.log('localhost:8080 is running');
