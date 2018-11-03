var EventEmitter = require('events');
var util = require('util');

function Greeter() {
    this.greeting = 'hello there';
}

util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function(data) {
    console.log(this.greeting + ' ' + data);
    this.emit('greet', data);
}

var greeter = new Greeter();

greeter.on('greet', function(data){
    console.log('someone greeted ' + data);
});

greeter.greet('Ian');


//ES6 
// const EventEmitter = require('events');

// class Greeter extends EventEmitter {
//     constructor() {
//         super();
//         this.greeting = 'Hello there';
//     }

//     greet(data) {
//         console.log(`${this.greeting} ${data}`);
//         this.emit('greet', data);
//     }
// }

// const greeter = new Greeter();

// greeter.on('greet', function(data) {
//     console.log('Someone greeted '+ data);
// });

// greeter.greet('Ian');