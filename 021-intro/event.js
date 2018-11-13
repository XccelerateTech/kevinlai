var eventEmitter = require('events');
var util = require('util');
var schedule = require('./a/schedule')
var today = require('./a/app');

function mySchedule(){
    console.log('I am constructor function')
    this.schedule = schedule;
    this.arr = []
}

util.inherits(mySchedule, eventEmitter);

mySchedule.prototype.newFunction = function(){
    console.log('I am emit weekly event');
    this.arr = Object.keys(thisWeek.schedule)
    return this.emit('weekly');
}

var thisWeek = new mySchedule();

thisWeek.on('weekly', function(){
    console.log('I am result of weekly event')
    for(let element in this.arr){     
        setTimeout(()=>{
            console.log(element)

        }, 1000)
    }
    setTimeout(()=>{
        console.log('outside')
        setTimeout(()=>{
            console.log('middle')
            setTimeout(()=>{
                console.log('inner')
            }, 2000)
        }, 2000)
    },2000)
    setInterval(()=>{
        var counter = 0;
        counter++;
        console.log(counter)
    }, 1000)
})

thisWeek.newFunction();
// console.log(thisWeek);
// console.log(thisWeek._events.weekly);

