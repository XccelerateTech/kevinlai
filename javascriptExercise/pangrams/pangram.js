var Pangram = function(string){

            //toLowerCase() = lower case of the string
            //split() = split the string to an array
            //sort() = sort the order of a - z
            //join() = join an array to a string 
        this.string = string.toLowerCase().split("").sort().join("");;
        this.isPangram = function isPangram() {
            //letter of alphabet
            var letter = 'abcdefghijklmnopqrstuvwxyz';
            //count variable for validation
            var count =0;
            //loop over the string 
            for(var i = 0 ;i < this.string.length;i++){
                //indexOf() returns the index  within the string of the first occurrence of the letter
                //return -1 if the letter if not found or repeat
                //if the index is positive number count 1
                if(this.string.indexOf(letter[i]) != -1) {
                    count += 1;
                }
            }
            //test the count whether equal to 26 letter of the alphabet
            if (count == 26) {
                return true;
            } else return false;
        }

    }

    module.exports = Pangram;

// function Pangram (str) {
//     this.str = str;
//     this.isPangram = function isPangram() {
//         this.str = this.str.toLowerCase().split('').sort();
//         let checkStr = 'abcdefghijklmnopqrstuvwxyz';
        
//         for (let i = 0; i < checkStr.length; i++) {
//             for (let j = 0; j < this.str.length; j++) {
//                 if (checkStr[i] == this.str[j]) {
//                     checkStr = checkStr.substring(1);
//                     console.log(checkStr);
//                 }
//             }
//         }
        
//         if (checkStr === '') {
//             return true;
//         } else {
//             return false;
//         }
//     };
// }
//     module.exports = Pangram;
// const str1 = new Pangram('zxxxxxx');
// str1.isPangram();
