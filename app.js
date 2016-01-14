var express = require('express');
 
var app = express();

app.get('/', function (req, res) {

  res.send('Hello GitHub this is team Redskins');

  res.send('Hello GitHub this is team name Burroughs');

  res.send('Hello GitHub this is Rob');

  res.send('Hello GitHub this is Venkat Sreekanth');

});
 
app.listen(process.env.PORT || 80);
 
module.exports = app;