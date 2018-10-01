// let array = Array.from(Array(100).keys())


let array = [3,5,15,1]

array.map(element => {
  if (element % 3 === 0 && element % 5 === 0) {
    element = "fizzbuzz"
    // console.log(element)
  }
  else if (element % 3 === 0) {
    element = "fizz"
    // console.log(element)
  }
  else if (element % 5 === 0) {
    element = "buzz"
    // console.log(element)
  }
  else {
    element
    // console.log(element)
  }
  return element
})
