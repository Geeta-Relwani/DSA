// binary search the requirement it we should have the array sorted.
// its a divide and conquer approach

function binarySearch(arr, el){
    start = 0
    end = arr.length-1

while (end > start){
    mid = Math.abs((start+end)/2)
    if(el === arr[mid]){
        console.log('el found at position '+mid)
        return mid
    } else if (el> mid){
        start = mid
    } else{
        end = mid
    }
}
}

arr = [1,2,3,4,5,7,8,67]
el = 67

binarySearch(arr, el)