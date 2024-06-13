// Given a sorted array and given a number k, find the next number greater than number k in array
// [1,2,3,4,5,7,8,9] 
// constraint - O(n) = nlog(n)

function findGreaterNumber(arr,k){

    let start = 0
   let  end = arr.length-1
    let found = false
    console.log('1')

    if(k> arr[arr.length-1]){
        console.log('2')
        console.log('there is not next greater number in array')
        return -1
    } else if (k<arr[0]){
        console.log('3')
        console.log("next greater number is ", arr[0])
    }

    while(start<=end){
     let mid = Math.floor((start+end)/2)
     console.log('mid ',mid, 'start ', start,'end ',end)
        if(k == arr[mid]){
            console.log("next greater number is ", arr[mid+1])
            found = true
            break
        } 
        //  else if(k>arr[mid] && k<arr[mid-1] ){
        //     console.log("next greater number is ", arr[mid])
        //     found = true
        //     break
        
        // }
        else if(k>arr[mid]){
            start = mid+1
            console.log( 'k>mid ',mid, 'start ', start,'end ',end)

        }else  if(k<arr[mid]){
            end = mid -1
            console.log('k<mid ',mid, 'start ', start,'end ',end)

        }
    }
}

arr=[1,2,3,4,5,7,8,9] 
k= 6
findGreaterNumber(arr,k)