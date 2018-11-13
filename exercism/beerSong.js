class BeerSong {
    constructor() {
    }
    verse(input) {
        return (input > 0)
            ? `${input} bottle${(input > 1) ? "s" : ''} of beer on the wall, ${input} bottle${(input > 1) ? "s" : ''} of beer.\nTake ${(input > 1) ? "one" : 'it'} down and pass it around, ${
            ((input - 1) > 0) ?
                (input - 1) + ' bottle' + (((input - 1) > 1) ? 's' : '') + ` of beer on the wall.\n` :
                `no more bottles of beer on the wall.\n`}`
            : 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'
    }
    sing(start, end = 0) {
        let output = '';
        for (let i = start; i >= end; i--) {
            output += `${this.verse(i)}${(i != end) ? '\n' : ''}`
        }
        return output;
    }
}
module.exports = BeerSong;