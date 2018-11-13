var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('hello');
});

app.post('/login', function(req, res) {
    console.log(req.path);
    res.send('post received');
});

app.get('/users/:id', function(req, res){
    res.send('the user id is ' + req.params.id);
});

app.get('/location/:contry', function(req, res){
    res.send('the location is ' + req.params.contry);
});

app.listen(8080);