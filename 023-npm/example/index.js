var express = require('express')

var app = express();
var x;
app.get('/', function(req, res){
    res.send('this is get');
});

app.all('/all', function(req, res){
    res.send('this is all');
});

app.get('/ab?cd', function (req, res) {
    res.send('ab?cd')
  })

app.get('/readme.txt', function (req, res) {
res.send('readme.txt')
})

app.get('/route/:id/:name', (req, res)=>{
    console.log(req.params)
    res.send(req.params);
})

app.listen(8080)
