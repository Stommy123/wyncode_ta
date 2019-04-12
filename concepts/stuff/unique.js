const numbers = [1,2,3,4,5,1,2]
const unique = [...new Set(numbers)]
const uniqueFunction = n => [...new Set(n)]
console.log(uniqueFunction(numbers))
