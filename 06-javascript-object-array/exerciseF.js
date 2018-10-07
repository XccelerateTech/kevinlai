var alphabet = {
    '1': 'a',
    '2': 'b',
    '3': 'c',
    '4': 'd',  
    '5': 'e',  
    '6': 'f',
    '7': 'g',  
    '8': 'h',
    '9': 'i',
    '0': 'j',
   }
   
  var transform = function(strNum) {
    var sortArr = strNum.split('').sort();
    var transformArr = [];
    for (var i=0; i<sortArr.length; i++) {
      console.log(sortArr[i]);
      console.log(alphabet[(sortArr[i])]);
     transformArr.push(alphabet[(sortArr[i])]);
    }
    var reduceArr = transformArr.reduce(function(accumulator, str){
      return accumulator + str;
    }, '');
    console.log(reduceArr);
  }
  
  transform('213')