const express = require('express');

class ToDoRouter {
    constructor(toDoService){
        this.toDoService = toDoService;
    }

    router() {
        let router = express.Router();
        router.get('/', this.get.bind(this));
        router.post('/', this.post.bind(this));
        router.put('/:id', this.put.bind(this));
        router.delete('/:id', this.delete.bind(this));
        return router;

    }

    get(req, res){
        console.log('get')
        return this.toDoService.list()
        .then((data)=> re(data))
        .catch((err)=> res.status(500).json(err));
    }

    post(req, res) {
        //toDo.js axios convert req.body to JSON format
        return this.toDoService.add(req.body.todo)
        .then(()=> this.toDoService.list())
        .then((todo)=> res.json(todo))
        .catch((err)=> res.status(500).json(err));
    }

    put(req,res){
        //index and todo from client
        //update json file 
        return this.toDoService.update(req.params.id, req.body.todo)
        //retrieve updated todoList
        .then(()=> this.toDoService.list())
        //respone in json format
        .then((data)=> res.json(data))
        .catch((err)=> res.status(500).json(err));

    }

    delete(req,res){
        //delete from api
        return this.toDoService.remove(req.params.id)
        .then((data)=> res.json(data))
        .catch((err)=> res.status(500).json(err));


    }
}

module.exports = ToDoRouter;