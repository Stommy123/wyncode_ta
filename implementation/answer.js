const people = [
  { name: 'Tommy', age: 20, },
  { name: 'Timmy', age: 10, },
  { name: 'Jimmy', age: 14, },
]

// 1
const youngestMember = people => {
  let youngest = people[0]
  for (let i = 0; i < people.length; i++) if (people[i].age < youngest.age) youngest = people[i]
  return youngest.name
}


// 2
const youngestMember = people => {
  let youngest = people[0]
  people.forEach(person => person.age < youngest.age ? youngest = person : youngest)
  return youngest.name
}

// 3
const youngestMember = people => {
  people.sort((a,b) => a.age - b.age)
  return people[0].name
}



console.log(youngestMember(people))
