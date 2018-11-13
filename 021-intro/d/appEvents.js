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
        while(this.second){
            setTimeout(()=>{
                console.log(this.second--)
                this.emit('tick');
            }, 1000)
        }
    }
}

const timer = new Timer(30);

timer.on('greet', function(data){
    console.log('timer ' + data)
})

timer.greet('BigTimer');

timer.on('tick', ()=>{
    console.log('this is tick')
})
timer.timeOut()

