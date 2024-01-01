// Implement a function called countUniqueValues which accepts a sorted array and counts unique values in the array. 
// There can be negative values but array will always be sorted

// My findings - this can be achieved with frequency counter patter even with unsorted array, 
// we are solving it with pointers just for practice


function countUniqueValues(arr){
   i=0

    for(let j=0; j<arr.length; j++){
        if(arr[i]!==arr[j]){
            arr[i+1] = arr[j]
            i++
        } 
// console.log(i,j)

    }
    let uniqueValue = i+1
    console.log('arr is '+ arr+' unique values ' + uniqueValue )
}

var arr = [1,1,1,1,1,1,1,2,3,3,4,4,4,4,4]

countUniqueValues(arr)