var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// app.post('/login',(req,res)=>{
// 	console.log(req.body);
//     console.log(req.files);
//     res.send("Login Information Received.");
// });

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
// app.use(bodyParser.json());

var arr = [1,2,3,4];

var sum = arr.reduce((x,y) => x + y);

app.get('/test', (req, res)=> {
    res.send('sum is ' + sum);
});

app.post('/test', (req, res) => {
    req.body = arr;
    console.log(req.body);
    res.send('post successful. result is ' + req.body);
  });

app.listen(8080);