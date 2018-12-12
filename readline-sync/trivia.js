const rl = require('readline-sync')

//PRE-DEFINING VARIABLES
let points = 0;
let yikes = 0;
let questions;
let begin;
let answer;
let playAgain;

//FUNCTION FOR RIGHT ANSWERS
const correct = () => {
  points += 250
  console.log(`You now have ${points}!`)
}

//FUNCTION FOR INCORRECT ANSWERS
const wrong = () => {
  yikes ++
  if (yikes >= 3) {
    console.log(`It looks like you lost! Better luck next time!`)
    gameover();
  }
  else console.log(`Thats a strike! You now have ${yikes}. Keep in mind that if you get 3 strikes, you lose!`)
}


//FUNCTION TO DETERMINE PRIZE
const winner = () => {
  if (points === 1000 && yikes < 3) console.log("Congratulations you got everything right! You win the grand prize!")
  else if (points === 750 && yikes < 3 ) console.log("Congratulations! You got most of the questions correct! Here is your consolation prize!")
  else if (points === 500 && yikes < 3) console.log("You only got two question right, you get a sticker for trying!")
}


//OPTIONAL REPLAY
const gameover = () => {
  console.log('Would you like to play again?')
  playAgain = rl.question(`(Y)es | (N)o: `).toLowerCase()
  playAgain === "y" || playAgain === "yes" ? newGame() : process.exit()
}


//GAME FUNCTION
const newGame = () => {
  playAgain = true

  //LOOP TO KEEP GAME RUNNING
  while (playAgain == true) {
    points = 0;
    yikes = 0;

//OOP METHOD TO CONTAIN QUESTIONS
    questions = [
      question1 = () => {
        console.log('Name one of the founders of Wyncode')
        answer = rl.question('|  Yuha  |  Bria  |  Tim |  Patricio  |: ', {
          trueValue: 'Yuha',
          falseValue: ''
        });
        answer === true ? correct() : wrong()
      },
      question2 = () => {
        console.log('Where is Wyncode located?')
        answer = rl.question('|  Wynwood  |  Palmetto Bay  |  Brickell  |  New York  |: ', {
          trueValue: 'Wynwood',
          falseValue: ''
        });
        answer === true ? correct() : wrong()
      },
      question3 = () => {
        console.log('What is 2 + 2')
        answer = rl.question('|  4  |  10  |  9  |  2  |: ', {
          trueValue: 4,
          falseValue: ''
        });
        answer === true ? correct() : wrong()
      },
      question4 = () => {
        console.log('Which cohort is the best cohort?')
        answer = rl.question('|  C26  |  C27  |  C28  |  C29  |: ', {
          trueValue: 'C26',
          falseValue: ''
        });
        answer === true ? correct() : wrong()
      },
    ]

    //INTRO
    console.log('Welcome to WynTrivia! Are you ready to begin?')
    begin = rl.question(`(Y)es | (N)o: `).toLowerCase()

    if (begin === 'y' || begin === 'yes') {
      //QUIZ LOOP
      questions.forEach(question => yikes < 3 ? question() : console.log("Better luck next time!"))
      winner()
    }
    else { process.exit() }
  }
}

//CALLING THE NEWGAME FUCNTION
newGame()
