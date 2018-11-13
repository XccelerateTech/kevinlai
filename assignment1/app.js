var express=require('express')
var promiseFS = require('../024-promises/practice')
var bodyParser = require('body-parser')
var fileUpload = require('express-fileupload')

app = express()
console.log(promiseFS)

function accessFolders(path){
    promiseFS.dir(path).then((file)=>{
        file.forEach(element => {
            console.log(element)
            app.get('/'+element, (req,res)=>{
                res.sendFile(path + '/'+ element)
            })
        });
    }).catch((err)=>{
        console.log('this is '+err)
    })
}

accessFolders(__dirname+'/files/files/project_B/assets')
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(fileUpload())
// function upLoad(path){
//     app.get('/'+path, (req, res)=>{
//         res.sendFile(path);
//     })
// }


app.listen(8080)