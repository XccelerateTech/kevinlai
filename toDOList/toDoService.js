const fs = require('fs');zz

class ToDoService {
    constructor(file){
        this.file = file;
        this.initPromise = null;
        this.init();
    }

    init(){
        if(this.initPromise === null) {
            this.initPromise = new Promise((resolve, reject)=>{
                this.read()
                .then(()=>{
                    resolve();
                })
                .catch(()=>{
                    this.todo = [];
                    this.write()
                    .then(resolve)
                    .catch(reject);
                })
            })
        }
        return this.initPromise;
    }

    read(){
        return new Promise((resolve, reject)=>{
            fs.readFile(this.file, 'utf-8', (err, data)=>{
                if(err){
                    reject(err);
                }
                try{
                    this.todo = JSON.parse(data);
                } catch(e){
                    return reject(e);
                }
                return resolve(this.todo);
            })
        })
    }

    write(){
        return new Promise((resolve, reject)=>{
            fs.writeFile(this.file, JSON.stringify(this.todo), (err)=>{
                if(err){
                    return reject(err);
                } else {
                    resolve(this.todo);
                }
            })
        })
    }

    add(todo){
        return this.init().then(()=>{
            this.todo.toDoList.push(todo)
            return this.write();
        });
    }
    //index, todo from toDoRouter put()
    update(index, todo){
        //this.init => read json file => promise
        return this.init().then(()=>{
            //match client todoList to server todoList
            this.todo.toDoList[index]=todo;

            //write updated todoList
            return this.write();
        })
    }

    remove(index){
        return this.init().then(()=>{
            //remove element by index and amount
            //write to todo.JSON
            // console.log('remove')
            this.todo.toDoList.splice(index, 1);
            return this.write()
        })
    }

    list(){
        return this.init()
        .then(()=> this.read())
        .then(()=> {
            return this.todo.toDoList;
        })
    }

}

module.exports = ToDoService;




