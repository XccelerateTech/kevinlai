var sport1 = require('./basketball');
var sport2 = require('./football')
var weeklySchedule = require('./schedule');
var daily = require('./daily')

// sport1()
// sport2()

// function pe(weather){
//     if(weather == 'sunshine') {
//         return sport2();
//     } 

//     if (weather == 'rainny') {
//         return sport1();
//     }
// }
// pe('sunshine');
// pe('rainny');

// console.log(weeklySchedule);

var today = (date)=>{
    if(date == 'tuesday'){
        return setTimeout(()=>{
            console.log('today is ' + date+ ' I need to go ' + daily(weeklySchedule[date])) + sport1()
        }, 2000)
    }else if(date == 'thursday'){
        return setTimeout(()=>{
            console.log('today is ' + date+ ' I need to go ' + daily(weeklySchedule[date])) + sport2()
        }, 2000)
    } else {
        return setTimeout(()=>{
            console.log('today is ' + date+ ' I need to go ' + daily(weeklySchedule[date]));
        }, 2000)
    }
}

// today('monday');
// today('tuesday');
// today('wednesday');
// today('thursday');
// today('friday');
// today('saturday');
// today('sunday');
module.exports = today;
