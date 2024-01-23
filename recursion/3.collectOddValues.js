// given an array collect odd values of the array
// There are two ways to solve this using resursion
// 1. helper method and 2. pure recursion
// In helper method we create a helper function that calls itself


function collectOddValuesHelper(arr){
    var result = []

    function helper (helperInput){
        if(helperInput.length === 0){
            return 
        }
        if(helperInput[0]%2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result
}
var arr = [1,2,3,45,5,5]

var printResult = collectOddValuesHelper(arr)
console.log(printResult)

var printure = collectOddValues(arr)
console.log(printResult)



// using pure recursion 

function collectOddValues(arr){

}
