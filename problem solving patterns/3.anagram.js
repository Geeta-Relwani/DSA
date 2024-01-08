// Given two strings, write a function to determine if they are anagrams of each other
// Anagram is word or phrase - made by rearranging the letter eg - cinema - iceman


function validAnagram(str1, str2){

    if ( str1.length !== str2.length){
        console.log("string length doesn't match")
        return false
    }

    var obj1 ={}
    var obj2= {}

    for(let val of str1){
        obj1[val] = (obj1[val] || 0) +1
    }

    for(let val of str2){
        obj2[val] = (obj2[val] || 0) +1
    }

    for( let key in obj1){
        //check if same alphabets present (compare object keys)
        if (!(key in obj2)){
            console.log('same alphabet keys not present')
            return false
        }
        //check if alphabets repeat same number of times ( compare object values)
        if (obj1[key]!==obj2[key]){
            console.log('same alphabet keys do not repeat same no. of times')
            return false
        }
    }
    console.log('true - they are anagrams')
    return true

}//time complexity O(n)


str1 = 'ABX123a'
str2 = '123ABXa'
validAnagram(str1,str2)