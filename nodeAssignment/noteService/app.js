const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const hb = require('express-handlebars');



const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine('handlebars', hb({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static("public"));
app.use(bodyParser.json());


const NoteService = require('./NoteService')
var newNote = new NoteService('notes.json');



app.get('/', (req, res)=>{

    res.render('index')



})



app.post('/',(req,res)=>{
    newNote.addNote(req.body.newNote).then(()=>{
        console.log(newNote.notes.notes)
    }).then(()=>{
        res.render('index')
    })
})

app.delete('/',(req,res)=>{
    newNote.deleteNote(0).then(()=>{
        res.send(newNote.notes)
    })
})

app.listen(8080)