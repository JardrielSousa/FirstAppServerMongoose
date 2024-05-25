var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
   console.log("Hello world is run!")
});

app.listen(3000);