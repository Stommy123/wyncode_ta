let rl = require("readline-sync")


//TOP LEVEL VARIABLE DECLARATIONS
let points = 0;
let strikes = 0;
let questions;
let answers;
let begin;


function correct() {
  points++
  console.log(`You now have ${points} points!`)
}

function incorrect() {
  strikes++
  console.log(`You now have ${strikes} strikes`)
}

function win() {
  console.log("You win!")
}

function gameover() {
  if (strikes >= 3) {
    console.log("Thanks for playing")
  }
}

function game() {
  let play = true;

  while(play) {

    questions = [
      question1 = function() {
        console.log("What is 2 + 2")
        answer = rl.question("1 | 2 | 5 | 4 ", {
          trueValue: 4,
          falseValue: ''
        })
        if (answer === true ) {
          console.log("Correct!")
          correct()
        }
        else {
          console.log("Thats wrong")
          incorrect()
        }
      },
      question2 = function() {
        console.log("Where Wyncode")
        answer = rl.question(" Wynwood | Brickell | New York | South Beach ", {
          trueValue: "Wynwood",
          falseValue: ''
        })
        if (answer === true ) {
          console.log("Correct!")
          correct()
        }
        else {
          console.log("Thats wrong")
          incorrect()
        }
      },
    ]

    console.log("Welcome to Trvia")
    begin = rl.question("Would you like to play? Yes / No?")
    if (begin === "Yes") {
     questions.forEach(question => {
       question()
     })
   }
   else {
     break;
   }
     win()
     break;
  }
}

game()
