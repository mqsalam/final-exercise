var express = require('express');
 
var app = express();

app.get('/', function (req, res) {

<<<<<<< HEAD
  res.send('Hello GitHub this is team Redskins');
=======
  res.send('Hello GitHub this is team name Burroughs');

  res.send('Hello GitHub this is Rob');
>>>>>>> refs/remotes/origin/master

});
 
app.listen(process.env.PORT || 80);
 
module.exports = app;