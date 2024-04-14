function getComputerChoice() {
  const randomNumber = Math.ceil(Math.random() * 3);
  if(randomNumber == 1){
    return "Rock";
  }
  else if(randomNumber == 2){
    return "Paper";
  }
  else {
    return "Scissors";
  }
}

// Play a single round
function playRound(userChoice) {
  let computerChoice = getComputerChoice();

  if(userChoice == computerChoice) {
    return "Tie";
  }
  else if((userChoice == "Rock" && computerChoice == "Scissors") ||
    (userChoice == "Paper" && computerChoice == "Rock") ||
    (userChoice == "Scissors" && computerChoice == "Paper")) {
    
    return "User";
  }
  else if((userChoice == "Rock" && computerChoice == "Paper") ||
    (userChoice == "Paper" && computerChoice == "Scissors") ||
    (userChoice == "Scissors" && computerChoice == "Rock")) {
    
    return "Computer";
  }
  else {
    return "Error";
  }
}

// // Play 5 rounds
// function playGame() {
//   let userScore = 0;
//   let computerScore = 0;
//   let winner;

//   for(let i = 0; i < 5; i++) {
//     winner = playRound(getUserChoice(), getComputerChoice());
//     console.log(winner);
//     if(winner == "User") {userScore+=1;}
//     else if(winner == "Computer") {computerScore+=1;}
//   }

//   if(userScore > computerScore) {
//     console.log("You win!");
//   }
//   else if(userScore < computerScore) {
//     console.log("You lose!");
//   }
//   else {
//     console.log("Tie!");
//   }
// }

// playGame();


buttons = document.querySelectorAll("button");


buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Prendo l'id
    let userChoice = e.target.id;
    // Gioco il game
    let winner = playRound(userChoice);
    // Mostro il vincitore nel display
    document.querySelector("#winner > span").textContent = winner;

    let scoreDiv;
    // Aggiorno i punteggi
    if(winner == "User") {
      scoreDiv = document.querySelector("#user-score > span")
    }
    else if(winner == "Computer") {
      scoreDiv = document.querySelector("#computer-score > span")
    }
    else {
      scoreDiv = Nan;
    }
    let actualScore = scoreDiv.textContent;
    actualScore = parseInt(actualScore);
    if(actualScore+1 == 5) {
      alert("Winner is " + winner);
      // Reset scores
      document.querySelector("#user-score > span").textContent = 0;
      document.querySelector("#computer-score > span").textContent = 0;
      document.querySelector("#winner > span").textContent = '';
    }
    else {
      scoreDiv.textContent = actualScore + 1;
    }

  });
});

