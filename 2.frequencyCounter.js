// What is frequency counter pattern?

// It is generally used in place where we might have to use 2 nested loops
// The time complexity for  this pattern is O(n) which is better than nested loops O(n2) complexity.

// Problem statement
// write a function called same, which accepts 2 arrays. The function should return true if every 
// value in array has its value squared in second array. The frequency of value must be same.
// (the order doesn't matter)


// naive approach

function sameNaive (arr1,arr2){
    if (arr1.length !== arr2.length){
        console.log('length not equal')
        return false
    }

    for(let i =0; i<arr1.length; i++){
    let correctIndex = arr2.indexOf(arr1[i]**2)
    if (correctIndex === -1){
        console.log('false - square not found')
        return false
    }
    arr2.splice(correctIndex, 1)
    }
    console.log('True- found square of each element')
    return true
}//time complexity O(n^2)



//optimized approach
function same (arr1, arr2){
    if (arr1.length !== arr2.length){
        console.log('length not equal')
        return false
    }

    var frequencyCounter1 = {}
    var frequencyCounter2 = {}

    
    for (let val of arr1){
        console.log('val of arr1',val)// refers to the value of array item not the index
        frequencyCounter1[val] = (frequencyCounter1[val] || 0)+1
        console.log(frequencyCounter1[val]+'    freqcounter1')
    }

    for (let val of arr2){
        // console.log('val of arr2',val)

        frequencyCounter2[val] = (frequencyCounter2[val] || 0)+1
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for ( let key in frequencyCounter1){
        console.log('key in frequencyCounter1',key)// refer to the key (key name in object) 
                                                //use frequencyCounter[Key] to access the value of the obj

        //check if the square key exists
        if ( !(key ** 2 in frequencyCounter2)){
            console.log('False - square key not present');
            return false
        }
        // check if square key repeats same number of times
        if ( frequencyCounter2[key**2] !== frequencyCounter1[key]){
            console.log('False - square key does not appear same number of times');
            return false
        }
    }

    console.log('true - i/p array1 has corresponding squared values in array2');

    return true


}//time complexity O(n)



//input and function call

var arr1 = [1,2,3,4]
var arr2 = [1,4,9, 16]
// sameNaive(arr1,arr2)
same(arr1,arr2)


