const pg = require('pg');
const fs = require('fs');
const CsvReadableStream = require('csv-reader');

var config = {
    user: 'postgres',
    database: 'postgres',
    password: '160693',
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}


const client = new pg.Client(config);
//read csv file
const inputStream = fs.createReadStream('transaction_record.csv','utf-8');

async function commads(){

    await client.connect();

    let rows= []
    //pipe from csv file 
    inputStream
    .pipe(CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
    //display in data and push to new array
    .on('data', function (row) {
        rows.push(row);
    })
    //further action
    .on('end', async function (data) {
        console.log(rows)
        console.log('No more rows!');
        //ensure BEGIN command first
        await client.query('BEGIN');
        try {
            for (let row of rows) {
                //store data in corresponding variable
                let [action, name, quantity] = row;
                //prevent negative deduction
                if(action === 'SELL') {
                    let result = await client.query(`
                    SELECT quantity FROM stock INNER JOIN citrus on stock.citrus_id = citrus.id
                    WHERE citrus.name = $1 GROUP BY quantity;
                    `, [name]);
                    console.log(result.rows);
                    if (result.rows[0].quantity < quantity) {
                        throw new Error (`Not enough money for ${name}!`);
                    }
                }
                if(action === 'BUY') {
                    //increment in stock table
                    //reference from citrus 
                    //match citrus_id of stock table equal to id of citrus table and 
                    //name of citrus table equal to transaction record
                    let result = await client.query(`
                    UPDATE stock SET quantity = quantity + $1
                    FROM citrus
                    WHERE stock.citrus_id = citrus.id AND name = $2
                    `, [quantity, name]);
                    console.log(`You have brought ${quantity} ${name}s`);
                } else {
                    let result = await client.query(`UPDATE stock SET quantity = quantity - $1
                    FROM citrus
                    WHERE stock.citrus_id = citrus.id AND name = $2
                    `, [quantity, name]);
                    console.log(`${quantity} ${name} sold! You're become rich!`);
                }
            }
            //commit change 
            await client.query('COMMIT');
        }
        //error handling
        catch (e){
            await client.query('ROLLBACK');
            console.log(e);
        }
    });
 
}

commads();