const express = require('express'); // grab express module installed
const app = express(); // created an app using express module
const port = 8080;
var passport = require('passport');

// main menu route
app.get('/', function (req, res) {
  var html = "<ul>\
    <li><a href='/auth/github'>GitHub</a></li>\
    <li><a href='/logout'>logout</a></li>\
  </ul>";

  res.send(html);
});

var server = app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)});

app.get('/logout', function(req, res){
  console.log('logging out');
  req.logout();
  res.redirect('/');
});
