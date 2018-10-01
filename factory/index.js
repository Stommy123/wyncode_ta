function Person(name, age, hair) {
  return {
    name,
    age,
    hair
  }
}

function CreatePerson(el) {
  return el.map(element => {
    return Person(...element)
  })
}


CreatePerson([['Tommy', 12, 'brown'], ['Timmy', 15, 'black']])
