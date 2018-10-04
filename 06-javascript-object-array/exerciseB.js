var reverse = function(num) {
    var strArr = [num].toString();;
    var reverseArr = strArr.split("").reverse();
    var arr = [];
    for (var i =0; i < reverseArr.length; i++) {
      arr.push(Number(reverseArr[i]));
    }
    return arr;
  }
  
  reverse(12345);