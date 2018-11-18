var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
]

var result = players.filter(function(player) {
    return player.club === 'FC Barcelona';
})

var playersName = result.map(function(player) {
    return player.name;
})

console.log(result);
console.log(playersName);