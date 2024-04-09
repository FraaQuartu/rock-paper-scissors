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
    return "Tie!";
  }
  else if((userChoice == "Rock" && computerChoice == "Scissors") ||
    (userChoice == "Paper" && computerChoice == "Rock") ||
    (userChoice == "Scissors" && computerChoice == "Paper")) {
    
    return "You win! " + userChoice + " beats " + computerChoice + "!";
  }
  else if((userChoice == "Rock" && computerChoice == "Paper") ||
    (userChoice == "Paper" && computerChoice == "Scissors") ||
    (userChoice == "Scissors" && computerChoice == "Rock")) {
    
    return "You lost! " + userChoice + " loses against " + computerChoice + "!";
  }
  else {
    return "Invalid input!";
  }
}