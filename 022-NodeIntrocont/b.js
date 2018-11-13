function copy(path){
    var fs = require('fs');
    console.log(__dirname)
    var readable = fs.createReadStream(__dirname + '/fsExample/text.txt', {encoding: 'utf8', highWaterMark: 32*1024 });

    var writeable = fs.createWriteStream(__dirname+ path);

    readable.on('data', function(chunk){
        writeable.write(chunk);
    });
}

copy('/bEx/file.txt');