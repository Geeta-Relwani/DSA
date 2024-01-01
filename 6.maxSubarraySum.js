// Write a function called maxSubArraySum which accpets an array of integers and a number called n. 
// The function should calculate maximum sum of n consecutive elements in the array.


function maxSubArraySumNaive(arr, n){

    if (n> arr.length){
        console.log ('Need more numbs in array')
        return null
    }

    var max = -Infinity // incase we are adding all negative integers
    var subarray = []

    for (let i=0; i<arr.length - n+1; i++){ // this will stop the loop for let set of n num in arr
        
        //now we need to loop over the smaller sub array that we will create with another loop
        temp =0;
        tempSubarray=[]
        // subarray = []
        for (let j=0; j<n; j++){
            tempSubarray.push(arr[i+j])
            temp += arr[i+j];
        }
        if (temp > max){
            subarray = tempSubarray
            max = temp;
            console.log(subarray, max)
        }
    }

    console.log('max sum is ', max, 'subarray is  ', subarray)


} // //time complexity O(n^2)


function maxSubArraySum(arr,n){

    maxSum = 0
    subArr = []
    //find the sum of first n number in one for loop
    for(let i=0; i<n; i++){
        maxSum += arr[i]
        subArr.push(arr[i])
    }

    //add a new for loop starting from nth elememnt, sub first element from sum and add n+1th element to get the next sum
    for (let j=n; j<arr.length; j++){
        tempSum = maxSum - arr[j-n]+ arr[j]
        
        if (tempSum>maxSum){
            maxSum = tempSum
            subArr.shift()
            subArr.push(arr[j])
        }
    // ? maxSum = Math.max(maxSum, tempSum)
    }

    console.log('max sum is ', maxSum,'The subarray is', subArr)

}//time complexity O(n)


arr = [1,2,3,4,5,6,7]
n = 4
// maxSubArraySumNaive(arr,n)
maxSubArraySum(arr, n)