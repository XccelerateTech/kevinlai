var redis = require('redis');
var client = redis.createClient({
    host: 'localhost',
    port: 6379,
    password: 12345
});

client.on('error', function(err){
    console.log(err);
});

client.setex('location', 60, 'Hong Kong', function(err, data) {
    if(err) {
        return console.log(err);
    }

    client.get('location', function(err, data){
        if(err) {
            return console.log(err);
        }
        console.log('The value is ', data);
    });
});