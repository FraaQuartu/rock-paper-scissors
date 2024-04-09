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

function getUserChoice() {
  return prompt("Choose Rock, Paper or Scissors");
}

function playRound(userChoice, computerChoice) {
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

function playGame() {
  let userScore = 0;
  let computerScore = 0;

  let winner = playRound(getUserChoice(), getComputerChoice());
  console.log(winner);
  if(winner == "User") {userScore+=1;}
  else if(winner == "Computer") {computerScore+=1;}

  winner = playRound(getUserChoice(), getComputerChoice());
  console.log(winner);
  if(winner == "User") {userScore+=1;}
  else if(winner == "Computer") {computerScore+=1;}

  winner = playRound(getUserChoice(), getComputerChoice());
  console.log(winner);
  if(winner == "User") {userScore+=1;}
  else if(winner == "Computer") {computerScore+=1;}

  winner = playRound(getUserChoice(), getComputerChoice());
  console.log(winner);
  if(winner == "User") {userScore+=1;}
  else if(winner == "Computer") {computerScore+=1;}

  winner = playRound(getUserChoice(), getComputerChoice());
  console.log(winner);
  if(winner == "User") {userScore+=1;}
  else if(winner == "Computer") {computerScore+=1;}


  if(userScore > computerScore) {
    console.log("You win!");
  }
  else if(userScore < computerScore) {
    console.log("You lose!");
  }
  else {
    console.log("Tie!");
  }

}