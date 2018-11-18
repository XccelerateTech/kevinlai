const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: "postgres",
        user: "postgres",
        password: "160693"
    }
});

// let query = knex.select("*").from("citrus");

// console.log(query.toSQL());

// query.then((rows)=>{
//     console.log(rows)
// }).catch((err)=>{
//     console.log(err);
// });

// let query1 = knex.select('id','name','taste').from('citrus').where('name','like', '%e%');

// console.log(query1.toSQL())

// query1.then((rows)=>{
//     console.log(rows)
// }).catch((err)=>{
//     console.log(err);
// });

// let query2 = knex.select('*').from('citrus').join('stock', 'stock.citrus_id', 'citrus.id');

// console.log(query2.toSQL())

// query2.then((rows)=>{
//     console.log(rows)
// }).catch((err)=>{
//     console.log(err);
// });

// let query3 = knex.select('*').from('citrus').join('stock', function(){
//     this.on('stock.citrus_id', '=', 'citrus.id').onNotNull('citrus.id');
// });

// query3.then((rows)=>{
//     console.log(rows)
// }).catch((err)=>{
//     console.log(err);
// });

// let query4 = knex.select('*').from('citrus').join('stock', 'stock.citrus_id', 'citrus.id').orderBy('price');

// query4.then((rows)=>{
//     console.log(rows)
// }).catch((err)=>{
//     console.log(err);
// });
