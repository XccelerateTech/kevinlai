var express = require('express')

var app = express();
var x;
app.get('/', function(req, res){
    res.send('hello');
});
app.listen(8080)