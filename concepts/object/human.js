//TYPICAL
const human = {
  walk: () => {
    console.log("I'm walking")
  },
  talk: () => {
    console.log("I'm talking")
  },
  eat: () => {
    console.log("I'm eating")
  },
  sleep: () => {
    console.log("I'm sleeping")
  }
}

human.walk()
human.talk()
human.eat()
human.sleep()

//CONCISE
const dog = {
  bark: _ => console.log("woof!"),
  run: _ => console.log("doggo is running"),
  sleep: _ => console.log("zzzzzzzz")
}

dog.bark()
dog.run()
dog.sleep()