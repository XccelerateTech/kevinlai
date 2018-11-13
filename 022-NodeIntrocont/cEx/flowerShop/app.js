let http = require('http');
fs = require('fs');

http.createServer(function(req, res){
    if(req.url === '/'){
        // res.writeHead(200, {'content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/img/flower-icon.png') {
        fs.createReadStream(__dirname + '/img/flower-icon.png').pipe(res);
    }
    else {
        res.writeHead(404);
        res.end();
    }
}).listen(8080, '127.0.0.1');