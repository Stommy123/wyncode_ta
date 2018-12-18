//BASIC
const maxBasic = (...nums) => {
    let max = nums[0]
    for (let i = 0; i < nums.length; i++) { if (nums[i] > max) max = nums[i] }
    return max
}
console.log(maxBasic(1,7,5,2))

//FOREACH
const maxForEach = (...nums) => {
    let max = nums[0]
    nums.forEach(n => { if (n > max) max = n })
    return max
}
console.log(maxForEach(1,7,5,2))

//REDUCED
const maxReduced = (...nums) => {
    return nums.reduce((acc, cur) => {
        if (acc < cur) { return cur }
        else { return acc }
        })
}
console.log(maxReduced(1,7,5,2))

//SORTED
const maxSorted = (...nums) => {
    const max = nums.sort((a,b) => b - a)
    return max[0]
}
console.log(maxSorted(1,7,5,2))

//FAVORITE
const myMax = (...nums) => nums.reduce((acc, curr) => acc < curr ? curr : acc)
console.log(myMax(1,7,5,2))
