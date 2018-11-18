const express = require('express');

let app = express();

//server
//listening
//set static folder

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/'+'views/index.html');
})

app.listen(8080);