// Given a sorted arry  and n find the position of the given number 

function naiveSearch (arr, n){
    if (n<arr[0] || n>arr[arr.length-1]){
        console.log ('number not in arry')
        return
    }

    for (i=0; i<arr.length; i++){
        if ( arr[i]===n){
            console.log('number found on position ',i)
            return i
        }
    }
    console.log('Number not in arr')
}//time complexity O(n)

//divide and conquer approach

function search (arr, n){

    min = 0;
    max = arr.length-1

    if (n<arr[0] || n>arr[arr.length-1]){
        console.log ('number not in arry')
        return
    }
    
    while(min<=max){
     mid = Math.floor((min+max)/2)

    if (n === arr[mid]){
        console.log('n is at index ',mid)
        return
    }
    else if (n>arr[mid]){
        min = mid+1
    }else{
        max = mid -1
    }
    console.log('Number not found in array');

}
}

arr = [2,3,4,5,6,7,8,9,19]
n = 9
// naiveSearch(arr,n)
search (arr, n)