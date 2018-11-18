var pg = require('pg');

var config = {
    user: 'postgres',
    database: 'postgres',
    password: '160693',
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

var client = new pg.Client(config);

client.connect();


client.query('SELECT * FROM citrus', function(err, results) {
    if(err) {
        console.log(err);
    }
    var orangeResult = results.rows.filter(x => x.color == 'orange');
    return console.log(orangeResult);
})



