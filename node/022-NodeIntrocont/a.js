// function greet(callback) {
//     console.log('Hello');
//     callback();
// }

// greet(function(){
//     console.log("I'm the callback");
// });

// // ============================================

// function square(callback) {
//     console.log('the size of the square is ' + callback());
// }

// square(function(){
//   return 20;
// })

// function getItem(callback){
//   callback();
// }

// getItem(function(){
//   console.log('this is item');
// })

// // =============================================

function processArray(arr, callback){
  var newArr =[];
//   for (let i in arr){
//     newArr.push(callback(arr[i]));
//   }
  for (var i=0;i<arr.length;i++){
    newArr.push(callback(arr[i]));

  }
//   arr.forEach(function(e){
//     newArr.push(callback(e))
//   })
  console.log(newArr)
}

var myArray = [4, 8, 2, 7, 5];
processArray(myArray, function(a) {
    return a * 2;
});

var myArray = [7, 8, 9, 1, 2];
processArray(myArray, function (a) {
    return a + 5;
});

var myArray = [5, 60, 20, 10, 25];
processArray(myArray, function (a) {
    var divide = a / 5;
    console.log(divide)
    console.log(a)
    return divide + a;
});