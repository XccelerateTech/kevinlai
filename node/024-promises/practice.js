var fs = require('fs')

//access directory through promise
function readdir(path){
    return new Promise((resolve, reject)=>{
        fs.readdir(path,(err, file)=>{
            //handle err
            if(err){
                reject(err);
            //pass result(use then())
            }else {
                resolve(file);
            }
        })
    })
}


//read file or directory stat through promise
function readstat(path){
    return new Promise((resolve, reject)=>{
        fs.stat(path,(err, fileStat)=>{
            if(err){
                reject(err);
            }else{
                resolve(fileStat);
            }
        })
    })
}


//exports as a object
module.exports.dir = readdir
module.exports.stat = readstat