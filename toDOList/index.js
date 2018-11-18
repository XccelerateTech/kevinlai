const express = require('express');
const fs = require('fs');
const path = require('path');
const hb = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

const toDoService = require('./toDoService');
const toDoRouter = require('./toDoRouter')

app.engine('handlebars', hb({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


let todoService = new toDoService(path.join(__dirname, 'toDo.json'));

app.get('/', (req,res,next)=>{
    console.log('getting')
    todoService.list().then((notes)=>{
        // console.log(notes.toDoList);
    })
    next()
})

app.get('/', (req,res)=>{
    todoService.list().then((data)=>{
        // console.log("index.js: "+data)
        res.render('index',{
            //reference to index.handlebars
            toDo: data
        });

    });
})
app.use('/api/todo', (new toDoRouter(todoService)).router())


app.listen(8080)