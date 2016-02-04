var express = require('express');
 
var app = express();

app.get('/', function (req, res) {

  res.send('Hello GitHub this is lisa-thuy-team \n
  Hello GitHub this is team name \n
  Hello GitHub this is team name second time \n
  Hello GitHub this is team name Burroughs \n
  Hello GitHub this is Rob \n
  Hello GitHub this is Venkat Sreekanth');

});
 
app.listen(process.env.PORT || 80);

module.exports = app;

