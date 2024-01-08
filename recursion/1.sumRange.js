// Recursion is when a function calls itself.
// Same problem can be solved by loop/iteration but sometimes we need to use recursion

// Problem statment
// Given a number num, find the sum of all number from num to 1 using recursion 

function sumRange(num){
    if (num == 1) return 1;
    return num + sumRange(num -1)
}

var result = sumRange(4)
console.log(result)