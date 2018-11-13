// app.js

var functions = require('./function');
console.log(functions.halver(50));

// or specify directly when requiring
var halver = require('./function').halver
console.log(halver(10));