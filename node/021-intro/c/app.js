var random = require('./randomNum');
var letter = require('./letter')
var text = require('./text')


function randomText(){
    var arr=[];
    for (var i=1; i<=text(150);i++){
        arr.push(letter[random()]);
    }
    console.log(arr.join(''))
}

randomText(20)

var greet = require('./greet')
greet.english()
greet.german()