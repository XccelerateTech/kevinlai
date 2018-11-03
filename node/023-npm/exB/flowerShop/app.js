var express = require('express');
// var path = require('path');
var app = express();


//access to /public/(stuff)
//active all the (stuff) in public
app.use(express.static('public'));



// / => url path, assign to index.html

// app.get('/',(req,res)=>{
// 	res.sendFile(path.join(__dirname,'index.html'));
// });

app.listen(8080)