for (var x = 1; x <= 30; x++) {
    if (x%3 == 0 && x%5 == 0){
      console.log("Hong Kong");
    } else if (x%5 == 0){
      console.log("Kong");
    } else if (x%3 == 0){
      console.log("Hong");
    } else {
      console.log(x);
    }
  }
  