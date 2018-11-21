const express = require('express');
const fs = require('fs');
const path = require('path');
const hb = require('express-handlebars');
const bodyParser = require('body-parser');
const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: "todolist",
        user: "postgres",
        password: "160693"
    }
});

// let query = knex.select('content').from('users').innerJoin('lists','lists.users_id', 'users.id');

// console.log(query.toSQL())

// query.then((rows)=>{
//     console.log(rows);
// }).catch((err)=>{
//     console.log(err)
// })

const app = express();

const toDoService = require('./toDoService');
const toDoRouter = require('./toDoRouter')

app.engine('handlebars', hb({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


let todoService = new toDoService(knex);

app.get('/', (req,res,next)=>{
    console.log('getting')
    next()
})

app.get('/', (req,res)=>{
    todoService.list().then((data)=>{
        res.render('index',{
            //reference to index.handlebars
            toDo: data
            // id: data.id
            // toDo: data.map(element => element.content)
        });

    });
})
app.use('/api/todo', (new toDoRouter(todoService)).router())


app.listen(8080)