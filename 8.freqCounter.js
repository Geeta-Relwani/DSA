// Write a function called sameFrequency. Given two positive integers, 
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false


function sameFrequency(n1,n2){

    // Convert numbers to strings
    n1 = n1.toString();
    n2 = n2.toString();
    obj1={}
    obj2={}

    if(n1.length !== n2.length){
        console.log('the nums dont have same lenght')

        return false;
    }

    for(let digit of n1){
        obj1[digit] = (obj1[digit] || 0)+1
    }

    for(let digit of n2){
        obj2[digit] = (obj2[digit] || 0)+1
    }

    for (let key in obj1){
        if(!(key in obj2)){
            console.log("keys don't match")
            return
        }

        if(obj1[key]!==obj2[key]){
            console.log("key values don't match")
            return
        }
    }
    console.log('the nums have same dight')
}

n1 = 1111
n2 = 1112

sameFrequency(n1,n2)