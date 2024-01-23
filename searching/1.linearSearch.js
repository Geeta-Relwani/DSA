// linear search is comparing the element we are trying to find with each element in array

function linearSearch(arr, el){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === el){
            console.log('el found at position '+i)
            return i
        }
    }
    console.log('el '+el+'not present in arr '+arr)
    return false
}

arr = [1,2,3,,5,67,7,7,7]
el = 67

linearSearch(arr, el)

// time complexity is O(n)