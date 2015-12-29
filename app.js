var express = require('express');
 
var app = express();
#Students make changes in the res.send to Team X 
app.get('/', function (req, res) {
  res.send('hello jenkins');
});
 
app.listen(process.env.PORT || 80);
 
module.exports = app;
