const max = (...nums) => nums.reduce((acc, curr) => acc < curr ? curr : acc)
console.log(max(1,7,5,2))
