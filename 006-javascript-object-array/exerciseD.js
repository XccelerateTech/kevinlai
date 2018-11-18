var scroe = [70,80,40,70,80,80];

var sum = scroe.reduce(function(accumulator, number) {
    return Math.floor(accumulator + number/ scroe.length);
}, 0);




console.log(sum);