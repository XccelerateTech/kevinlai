var fs = require('fs');
//synchronous
// var greeting = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
// console.log(greeting);


//read file
//================================================================================================================



//asynchronous 
// var greeting = fs.readFile(__dirname + '/greet.txt','utf8', function(err, data){
//     //callback data
//     console.log(data);
//     //error situation
//     console.log(err);
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

//================================================================================================================


//                     //create readable stream   //specific file => divide small amunt and fill up the buffer
// var myReadStream = fs.createReadStream(__dirname + '/read.txt', 'utf8');
//                     //inherit from event emitter => event = data

//     //the buffer pass the data run in chunk to myReadStream(var)
//                                 //callback function for received data
// myReadStream.on('data', function(chunk){
//             //listen event => data  

//     console.log('new chunk received: ');
//     console.log(chunk);
//     console.log(chunk.length)
// })

//write file
//================================================================================================================


// var readable = fs.createReadStream(__dirname + '/text.txt');

// readable.on('data', function(chunk){
//     //chunk === buffer
//     //default buffer size === 64000 bytes
//     console.log(chunk.length);
// });



//highWaterMark => reduce buffer size
//================================================================================================================

                                                                                                //32kb
// var readable = fs.createReadStream(__dirname + '/text.txt', { encoding: 'utf8', highWaterMark: 32*1024 });

// readable.on('data', function(chunk){
//     console.log(chunk.length);
// });


//createWriteStream => actually write file
//================================================================================================================



// var readable = fs.createReadStream(__dirname + '/text.txt', { encoding: 'utf8', highWaterMark: 32*1024 });

// var writeable = fs.createWriteStream(__dirname + '/textcopy.txt');

// readable.on('data', function(chunk){
//     writeable.write(chunk);
// });


//pipes 
//================================================================================================================
var readable = fs.createReadStream(__dirname + '/text.txt', { encoding: 'utf8', highWaterMark: 32*1024 });

var writeable = fs.createWriteStream(__dirname + '/textcopy.txt');

readable.pipe(writeable);