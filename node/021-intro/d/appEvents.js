const EventEmitter = require('events');

class Timer extends EventEmitter {
    constructor(num){
        super();
        this.greeting = 'this is a timer';
        this.second = num;
    }

    greet(data){
        console.log(`${this.greeting} ${data}`);
        this.emit('greet', data);
    }

    timeOut(){
        console.log(this.second)
        setTimeout(function(){
            while(this.second){
                console.log(this.second--);
            }
        }, 2000);
        this.emit('tick');
    }
}



const timer = new Timer(30);

timer.on('greet', function(a){
    console.log('timer ' +a)
})

timer.greet('BigTimer');
timer.timeOut();

console.log(timer)

