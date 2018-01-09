var express = require('express');
var router = express.Router();
var request = require('request');
var https = require('https');


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

router.get('/getTeam/:teamID/', function(req, res, next){
  console.log("get function");
  get_data(4);
});

function get_data(teamID){
    var agent = new https.Agent({
        host: 'loraiot.cattelecom.com',
        port: '443',
        path: '/',
        rejectUnauthorized: false
    });
    var options = ({
        method: 'GET',
        agent: agent,
        header: { 'Content-Type': 'application/json'}
    });

    options.url = 'https://loraiot.cattelecom.com/api/pressure/'+teamID+'/1'
    request(options, function(err, res, body){
        if (err) throw err;
        var data = JSON.parse(body);
        console.log(data);
    });
  }
module.exports = router;
