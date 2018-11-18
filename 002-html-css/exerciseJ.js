function multiply(num) {
    if(isNaN(num) || num <= 0) {
      console.log('ERROR');
    } else if (num > 1000000) {
      console.log(num);
    } else {
      for (var x = 0; x < 10; x++) {
        if (num <= 1000000) {
          console.log(num *= 10 );
        }
      }
    }
  }
  
  multiply(0)
  multiply('a')
  multiply(-1)
  multiply(1)