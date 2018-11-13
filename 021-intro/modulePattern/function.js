// functions.js
var doubler = function(n) {
    return n*2;
}

var halver = function(n) {
    return n/2;
}
module.exports.doubler = doubler;
module.exports.halver = halver;

// // short version

// module.exports.squarer = function(n) {
//     return n*n;
// }