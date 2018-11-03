var fs = require('fs')
var newArr =[];
let readAll = function (path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files)=>{
            if(err){
                reject(err);
            } else {
                console.log(files)
                files.forEach(element => {
                    newArr.push(path + '/'+element)
                });
                console.log(newArr)
                resolve(newArr);
            }
        });
    });
}

let readStat = function(filePath){
    return new Promise((resolve, reject)=>{
        filePath.forEach(element => {
            fs.stat(element, function(err, fileStat){
                console.log(fileStat);
                if (err){
                    reject(err);
                }
                if(fileStat.isDirectory()) {
                    console.log(element + ' is a directory')
                } else {
                    console.log(element + ' is a file' )
                }
            });
        })
    })
}

readAll('./files/files/').then(function(result){
    return readStat(result);
}).then(function(result){
    console.log(result)
})