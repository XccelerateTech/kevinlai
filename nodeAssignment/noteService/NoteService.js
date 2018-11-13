const fs = require('fs')

module.exports = class NoteService{

    constructor(filename){
        this.filename = filename;
        this.notes = [];
        this.listnotePromise = this.listNote();
    }

    listNote(){
        return new Promise((resolve, reject)=>{
            fs.readFile(this.filename, 'utf-8',(err, data)=>{
                if(err){
                    reject(err);
                    return;
                } else {
                    this.notes = JSON.parse(data);
                    resolve(this.notes);
                }
            });
        });
    }

    addNote(note){
        return new Promise((resolve, reject)=>{
            this.listnotePromise.then((data)=>{
                data.notes.push(note);
                fs.writeFile(this.filename, JSON.stringify(data),(err)=>{
                    if(err){
                        reject(err)
                    }else {
                        resolve()
                    }
                })

            })
        })
    }

    deleteNote(num){
        return new Promise((resolve, reject)=>{
            this.listnotePromise.then((data)=>{
                data.notes.splice(num, 1)
                fs.writeFile(this.filename, JSON.stringify(data),(err)=>{
                    if(err){
                        reject(err)
                    }else {
                        resolve()
                    }
                })
            })
        })
    }
}