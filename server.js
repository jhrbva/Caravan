const express = require('express'); // grab express module installed
const app = express(); // created an app using express module
const port = 8080;

app.get('/', function (req, res) {
  var html = " <ul>\
    <li><a href='/auth/facebook'>Facebook</a></li>\
    <li><a href='/logout'>Logout</a></li>\
    <li><a href='/auth/google'>Google</a></li>\
    <li><a href='/logout'>Logout</a></li>\
  </ul>";

  res.send(html);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
var server = app.listen(port, function () {console.log('Example app listening on port ${port}!')});
