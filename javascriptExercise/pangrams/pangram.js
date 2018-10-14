var Pangram = function(string){

        this.string = string.toLowerCase();                     //toLowerCase() = lower case of the string

        this.isPangram = function isPangram() {
            var letter = 'abcdefghijklmnopqrstuvwxyz';          //letters of alphabet

            var count =0;                                       //count variable for validation

            for(var i = 0 ;i < this.string.length;i++){
                                                                //indexOf() returns the index  within the string of the first occurrence of the letter
                                                                //return -1 if the letter if not found or repeat
                                                                //if the index is positive number count 1
                if(this.string.indexOf(letter[i]) != -1) {
                    count += 1;
                }
            }
            if (count == 26) {                                  //test the count whether equal to 26 letter of the alphabet
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
    module.exports = Pangram;
const str1 = new Pangram('zxxxxxx');
str1.isPangram();
