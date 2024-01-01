// Write a function sumZero that accepts a sorted array or integer.
// The function should find the first pair where the sum is zero.
// Return the first pair where in array whose sum is zero

// eg [-3,-2,-1,0,1,2,3] // [-3,3]
// Return not found if  no pair found
// eg [-2,0,1,3] // no pair found for sumZero

function sumZeroNaive(arr){
    var result = []
    for (let i=0; i<arr.length; i++){
        for (let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j]===0){
                 result = [arr[i],arr[j]]
                 console.log('result '+ result)
                 return
            }
        }
    }
    if(result.length==0){
        console.log("couldn't find a pair")
    }
} //time complexity O(n^2)


function sumZero(arr){
    let left = 0;
    let right = arr.length-1;
    var result = []

while(left<right){
    var sum = arr[left]+arr[right]
    console.log(sum)
    if(sum == 0){
        result = [arr[left],arr[right]]
        console.log('result '+ result)
        return
    } 
    else if (sum > 0){
        right--
    }
    else {
        left++
    }
}
if(result.length==0){
    console.log("couldn't find a pair")
}

}//time complexity O(n)

arr = [-2,-1,0,1,3]
// sumZeroNaive(arr)
sumZero(arr)