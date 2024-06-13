// Given two strings ransomNote and magazine, return true if ransomNote can be constructed
//  by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

var canConstruct = function(ransomNote, magazine) {
    
    let magObj = {}
    let ranObj = {}

    for(let val of magazine){
        magObj[val]= (magObj[val] || 0)+1
    }

    for(let val of ransomNote){
        ranObj[val]= (ranObj[val] || 0)+1
    }

    console.log('objs', magObj, ranObj)

    for(let key in ranObj){
        console.log('0',key, magObj[key])
        if(!(key in magObj)){
            console.log('1',key, magObj[key],false)
            return false
        }
        if(ranObj[key] > magObj[key]){
            console.log('2',key, magObj[key], false)
            return false
        }
    }
    console.log(true)
    return true
};

let ransomNote = "a"
let magazine = "b"
canConstruct(ransomNote, magazine)
