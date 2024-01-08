// sliding window pattern
// Given an array of integers of size ‘n’.
// Write a function to find max sub array of length k.


 function maxSubArray(arr, k) {

    if (arr.length < k) {
        return null;
    }

    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }

    for (let i = k; i <arr.length; i++){
        tempSum = tempSum - arr[i-k]+arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
return maxSum;
}

arr = [1,31,31,5,6,7,10,12,19]
k = 3
console.log(maxSubArray(arr, k));