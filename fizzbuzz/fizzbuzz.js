for (let i=0; i <= 100; i++) {
  if (i % 15 === 0) console.log("FizzBuzz")
  else if (i % 3 === 0) console.log("Fizz")
  else if (i % 5 === 0) console.log("Buzz")
  else console.log(i)
}

const MY_ARRAY = [...Array(101).keys()]

const fizzBuzzWithMap = MY_ARRAY.map(element => {
  if (element % 3 === 0 && element % 5 === 0) element = "fizzbuzz"
  else if (element % 3 === 0) element = "fizz"
  else if (element % 5 === 0) element = "buzz"
  else element
  return element
})
console.log(fizzBuzzWithMap)

const fizzBuzzWithForEach = MY_ARRAY.forEach(element => {
  if (element % 3 === 0 && element % 5 === 0) element = "fizzbuzz"
  else if (element % 3 === 0) element = "fizz"
  else if (element % 5 === 0) element = "buzz"
  else element
  console.log(element)
})
console.log(fizzBuzzWithForEach)

for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)
