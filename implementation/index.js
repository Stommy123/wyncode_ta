let people = [
  { name: 'Tommy', age: 20, },
  { name: 'Timmy', age: 10, },
  { name: 'Jimmy', age: 14, },
]

let youngest = people[0];

function youngestMember(people) {
  for (let i = 0; i < people.length; i++) {
    if (people[i].age < youngest.age) {
      youngest = people[i];
    }
  }
  return youngest
}

youngestMember(people)
