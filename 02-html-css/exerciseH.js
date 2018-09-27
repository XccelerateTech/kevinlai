function calculator(a, b, c) {
    switch (a) {
      case '+':
        return b += c;
        break;
      case '-':
        return b -+ c;
        break;
      case '*':
        return b *= c;
        break;
      case '/':
        return b / c;
        break;
    }
  }
  
  console.log(calculator('+', 5, 9));
  console.log(calculator('-', 7, 3));
  console.log(calculator('*', 5, 5));
  console.log(calculator('/', 9, 3));