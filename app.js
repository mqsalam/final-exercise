var express = require('express');
 
var app = express();

app.get('/', function (req, res) {
  res.send('hello Github this is Eugene and Kumar!

Hello GitHub this is Thomas-Taylor-Branch');
});
 
app.listen(process.env.PORT || 80);
 
module.exports = app;