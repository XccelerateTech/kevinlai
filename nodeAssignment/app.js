const express = require('express');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');
const path = require('path');
const fs = require('fs')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(basicAuth({
//     users:{'a':'aa'},
//     challenge: true
// }));

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

app.post('/login',(req,res)=>{
     new Promise((resolve, reject)=>{
        fs.readFile('users.json','utf-8', (err, data)=>{
            if(err){
                reject(err);
                return;
            } else{

                user = JSON.parse(data);

                user.push(req.body)
                
                console.log(user.length)

                resolve (user);
            };
        });
    })
    .then((data)=>{
        console.log(data)
        fs.writeFile('users.json', JSON.stringify(data), (err)=>{
            if(err){
                console.log(err);
                return
            }
        });

    })



  

	res.send("Login infomation received.");
});

app.listen(8080);