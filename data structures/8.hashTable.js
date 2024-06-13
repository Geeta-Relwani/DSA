//hash tables are key value pairs
// every language has built in hash functions like obj, and map in js
// It has wide applications 

function hash(key, arrLen){
    let total = 0
    for(let char of key){
    //map a=1, b=2, c=3 ...
    let value = char.charCodeAt(0)-96
    total = (total + value) % arrLen
    }
    console.log('total',total)
    return total
}

hash('orange',10)