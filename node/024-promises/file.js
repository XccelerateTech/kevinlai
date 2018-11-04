//inport from practice.js and save in a object
var promiseFS = require('./practice')

//determine a path is a directory or a file
function fileContent(path){
    //use stat function return a stat of a path, then process the result
    promiseFS.stat(path).then((stat)=>{
        //determine whether is a directory and print the result
        if(stat.isDirectory()){
            console.log(path + ' is a directory')
            //access the directory to look at inner content
            accessFolders(path)
        }else {
            //determine a path is a file
            console.log(path+ ' is a file')
        }
    }).catch((err)=>{
        //error handling
        console.log('this is '+ err)
    })
}

//access a directory
function accessFolders(path){
    //access a directory and return a array of inner content
    promiseFS.dir(path).then((file)=>{
        //process each inner content
        file.forEach(element => {
            //determine a path is a directory or a file (modify as a valid path)
            fileContent(path+'/'+element)
        });
    }).catch((err)=>{
        //error handling
        console.log('this is '+err)
    })
}

fileContent(__dirname+'/files/files')