let rl = require('readline-sync')

//PRE-DEFINING VARIABLES
let points = 0;
let yikes = 0;
let questions;
let begin;
let answer;

//FUNCTION FOR RIGHT ANSWERS
function correct() {
  points += 250
  console.log(`You now have ${points}!`)
}

//FUNCTION FOR INCORRECT ANSWERS
function wrong() {
  yikes ++
  if (yikes >= 3) {
    console.log(`It looks like you lost! Better luck next time!`)
    gameover();
  }
  else {
    console.log(`Thats a strike! You now have ${yikes}. Keep in mind that if you get 3 strikes, you lose!`)
  }
}


//FUNCTION TO DETERMINE PRIZE
function winner() {
  if (points === 1000 && yikes < 3) {
    console.log("Congratulations you got everything right! You win the grand prize!")
  }
  else if (points === 750 && yikes < 3 ) {
    console.log("Congratulations! You got most of the questions correct! Here is your consolation prize!")
  }
  else if (points === 500 && yikes < 3) {
    console.log("You only got two question right, you get a sticker for trying!")
  }
  else {
  }
}


//OPTIONAL REPLAY
function gameover() {
  console.log('Would you like to play again?')
  playAgain = rl.question(`(Y)es | (N)o: `).toLowerCase()
  if (playAgain === "y" || playAgain === "yes") {
    newGame();
  }
  else {
    playAgain = false
  }
}


//GAME FUNCTION
function newGame() {
  points = 0;
  yikes = 0;
  playAgain = true

  //LOOP TO KEEP GAME RUNNING
  while (playAgain == true) {
    points = 0;
    yikes = 0;

//OOP METHOD TO CONTAIN QUESTIONS
    questions = [
      question1 = function() {
        console.log('Name one of the founders of Wyncode')
        answer = rl.question('|  Yuha  |  Bria  |  Tim |  Patricio  |: ', {
          trueValue: 'Yuha',
          falseValue: ''
        });
        if (answer === true) {
          correct()
        } else {
          wrong()
        }
      },
      question2 = function() {
        console.log('Where is Wyncode located?')
        answer = rl.question('|  Wynwood  |  Palmetto Bay  |  Brickell  |  New York  |: ', {
          trueValue: 'Wynwood',
          falseValue: ''
        });
        if (answer === true) {
          correct()
        } else {
          wrong()
        }
      },
      question3 = function() {
        console.log('What is 2 + 2')
        answer = rl.question('|  4  |  10  |  9  |  2  |: ', {
          trueValue: 4,
          falseValue: ''
        });
        if (answer === true) {
          correct()
        } else {
          wrong()
        }
      },
      question4 = function() {
        console.log('Which cohort is the best cohort?')
        answer = rl.question('|  C26  |  C27  |  C28  |  C29  |: ', {
          trueValue: 'C26',
          falseValue: ''
        });
        if (answer === true) {
          correct()
        } else {
          wrong()
        }
      },
    ]

    //INTRO
    console.log('Welcome to WynTrivia! Are you ready to begin?')
    begin = rl.question(`(Y)es | (N)o: `).toLowerCase()

    if (begin === 'y' || begin === 'yes') {
      //QUIZ LOOP
      questions.forEach((question) => {
        if (yikes < 3) {
          question()
        }
        else {
          console.log("Better luck next time!")
        }
      })
      winner()
    }
    else {
      break;
    }
  }
}


//CALLING THE NEWGAME FUCNTION
newGame()
