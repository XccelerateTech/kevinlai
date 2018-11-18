const fs = require('fs');
const CsvReadableStream = require('csv-reader');

const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: "postgres",
        user: "postgres",
        password: "160693"
    }
});

const inputStream = fs.createReadStream('transaction_record.csv', 'utf-8');

async function command(){
    let rows = [];

    inputStream.pipe(CsvReadableStream({ parsedNumbers: true, parseBooleans: true, trim: true }))
    .on('data', async(row)=>{
        rows.push(row);
    })
    .on('end', async (data)=>{


        //trx = knex transaction
        knex.transaction(async (trx)=>{
            for (let row in rows){
                let [action, name, quantity] = rows[row];
                if(action === 'SELL'){
                    //map quantity of sell
                    let rows = await trx.select('quantity').from('stock')
                    .innerJoin('citrus', 'stock.citrus_id', 'citrus_id')
                    .where('citrus.name', name).groupBy('quantity');
                    //rows[0] becasue if first transaction is unvalid then whole transaction is block
                    if(rows[0].quantity< quantity){
                        throw Error (`Not ${name} for sales`);
                    }
                }

                if(action==='BUY'){
                    //select stock from where citrus_id = citrus.id where citrus.name = name(buy)
                    //[ { id: 1, quantity: 3, price: 25, citrus_id: 1 } ]
                    await trx('stock')
                    .whereIn('citrus_id', function(){
                        return this.select('id')
                        .from('citrus')
                        .where('name', '=', name);
                    })
                    .increment('quantity', quantity);
                } else {
                    await trx('stock')
                        .whereIn('citrus_id', function () {
                            return this.select('id')
                                .from('citrus')
                                .where('name', '=', name);
                        })
                        .decrement('quantity', quantity);
                }
            }

            let knexResult = await knex.select('*').from('stock').innerJoin('citrus', 'stock.citrus_id', 'citrus.id');
            console.log(knexResult);

            let trxResult = await trx.select('*').from('stock').innerJoin('citrus', 'stock.citrus_id', 'citrus.id');
            console.log(trxResult);
        //automatic commit
        })

    })
}



command()

process.on('exit', function(code){
    return console.log(`About to exit with code ${code}`)
})