// A non-empty array A consisting of N integers is given. 
// The unique number is the number that occurs exactly once in array A.


function solution(A) {
    // Implement your solution here
    let objA = {}

    for(let value of A){
        objA[value] = (objA[value] || 0) +1
    }

    let minIndex = Infinity
console.log(objA)
    
for (let i = 0; i < A.length; i++) {
    if (objA[A[i]] === 1 && i < minIndex) {
        minIndex = i;
    }
}
    console.log(minIndex, A[minIndex])

    return A[minIndex]
}

let A = [4, 10, 5, 4, 2, 10]
solution(A)