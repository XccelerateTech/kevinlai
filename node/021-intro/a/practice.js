var schedule = require('./schedule')

var day = Object.keys(schedule)
var task = Object.values(schedule)

function today(arr, callback){
    arr.forEach(e => {
        console.log('Today is '+e+' i need to go ' + callback(e));
    })
    console.log(2)

}

function whatToDo(value){
    console.log(1)
    return schedule[value];
}

today(day, whatToDo)

function processArray(arr, callback){
    arr.forEach(element => {
        console.log(callback(element))
    });
}

var myArr=[2,4,6,8];

processArray(myArr, (e)=>{
    return e * e;
})

