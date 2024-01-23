// return factorial of a number num using recursion

function factorial(num){
    if(num === 1) return 1
    return num * factorial(num-1)
}

var result = factorial(3)
console.log(result)