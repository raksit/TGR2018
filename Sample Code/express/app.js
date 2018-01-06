var express = require("express");
var bodyParser = require('body-parser');

var users = require('./user');


var app = express();

var port = process.env.PORT || 8080;

// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  res.render('index', {
    title: "Test Restful"
  });
});
// app.get('/', function(req, res) {
//   res.send('Hello World');
// });

// About Page
app.get('/about', function(req, res) {
  res.send('This is about page.');
});

app.get('/user', function(req, res) {
  res.json(users.getAll());
});

app.get('/user/:id', function(req, res) {
  var id = req.params.id;
  res.json(users.getById(id));
});

app.post('/newuser', function(req, res) {
  var json = req.body;
  res.send('Add new ' + json.name + ' Completed!');
});

app.listen(port, function() {
  console.log('Example app listening on port ' + port);
});
