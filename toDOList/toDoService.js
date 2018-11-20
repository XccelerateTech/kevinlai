const fs = require('fs');

class ToDoService {
    constructor(knex){
        this.knex = knex;
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
                    // this.todo = [];
                    // this.write()
                    // .then(resolve)
                    // .catch(reject);
                })
            })
        }
        return this.initPromise;
    }

    read(){
        return new Promise((resolve, reject)=>{
            let query = this.knex.select('content').from('users').innerJoin('lists','lists.users_id', 'users.id');


            query.then((rows)=>{
                this.todo = rows;
            }).catch((err)=>{
                reject(err)
            })
            // fs.readFile(this.file, 'utf-8', (err, data)=>{
            //     if(err){
            //         reject(err);
            //     }
            //     try{
            //         this.todo = JSON.parse(data);
            //     } catch(e){
            //         return reject(e);
            //     }z
                return resolve(this.todo);
            // })
        })
    }

    // write(){
        // return new Promise((resolve, reject)=>{
        //     fs.writeFile(this.file, JSON.stringify(this.todo), (err)=>{
        //         if(err){
        //             return reject(err);
        //         } else {
        //             resolve(this.todo);
        //         }
        //     })
        // })
    // }

    add(todo){
        return new Promise((resolve, reject)=>{
            let query = this.knex.select('*').from('lists').insert({users_id: 1, content: todo.content, complete: false});
            // this.knex.raw('INNSERT ')
    
            query.then(()=>{
                this.todo.push(todo)
                resolve(this.todo)
            }).catch((err)=>{
                reject(err)
            })
        })

        // return this.init().then(()=>{
        //     this.todo.toDoList.push(todo)
        //     return this.write();
        // });
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
            //remove element by index and amount
            //write to todo.JSON
            // console.log('remove')

            return new Promise((resolve, reject)=>{
                console.log(this.todo[index].content)
                let query = this.knex('lists').where('content',this.todo[index].content).del()
               query.then(()=>{
                this.todo.splice(index, 1);

                   resolve(this.todo);
               }).catch((err)=>{
                reject(err)
                })
            })
        }
    

    list(){
        return this.init()
        .then(()=> this.read())
        .then(()=> {
            return this.todo;
        })
    }

}

module.exports = ToDoService;




