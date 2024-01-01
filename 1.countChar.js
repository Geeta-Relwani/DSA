// count the number of each character in the string
// i/p = "Your Pin number is 1234"
// o/p = {
//     b:1
//     i:2
//     ...
// }


function charCount(str){

    //make an obj to return in end
    var result = {}
    // loop over the string to count char
    for(var char of str){
         // if char is num/letter and not in obj, add it to obj with count 1
        // if char is num/letter and in obj, increment count
        if(isAlphaNumeric(char)){
            char = char.toLowerCase()
            result[char] = ++result[char] || 1
        }
    }
       
        // if char is not num/ letter do nothing
    //return obj
    return result

}

function isAlphaNumeric(char){
    var code = char.charCodeAt(0)
    if(
        !(code > 47 && code < 59)&& // numeric(0-9)
        !(code > 64 && code < 91)&& // Upper alpha (A-Z)
        !(code > 96 && code < 123) // lower alpha (a-z)
        ){
        return false
    }
    return true
}

var str = "Your pin number is 1234"
console.log(charCount(str))