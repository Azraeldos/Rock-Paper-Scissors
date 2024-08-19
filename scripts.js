function playRound(humanChoice, computerChoice){
    
    if((humanChoice === computerChoice)){
        console.log("It's a tie!")
    }else if(((humanChoice === "Rock" ) && (computerChoice === "Paper"))){
         console.log("Sorry, you lost!")
         computerScore += 1;
        }else if (((humanChoice === "Rock" ) && (computerChoice === "Scissors"))){
         console.log("Congrats, you won!")
         humanScore += 1;
    }else if(((humanChoice === "Paper") && (computerChoice === "Rock"))){
         console.log("Congrats, you won!")
         humanScore += 1;
    }else if (((humanChoice === "Paper") && (computerChoice === "Scissors"))){
         console.log("Sorry, you lost!")
         computerScore += 1;
        }else if(((humanChoice === "Scissors") && (computerChoice === "Rock"))){
         console.log("Sorry, you lost!")
         computerScore += 1;
    }else if (((humanChoice === "Scissors") && (computerChoice === "Paper"))){
         console.log("Congrats, you won!")
         humanScore += 1;
    }else{
    }
    
}

function scoreChecker(humScre,compScre){
    if(humScre === compScre){
        console.log("Its a TIE!")
        console.log("Human score: ", humScre, "Computer score: ", compScre)
    }
    else if(humScre > compScre){
        console.log("You WIN!")
        console.log("Human score: ", humScre, "Computer score: ", compScre)
    }
    else{
            console.log("You LOSE!")
            console.log("Human score: ", humScre, "Computer score: ", compScre)
        }
}
  
var humanScore = 0, computerScore = 0;

function playGame(){
    
    for(i=0; i<5; i++){
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        // console.log(getHumanChoice());
        // console.log(getComputerChoice());
        // displays choices
        console.log(humanSelection);
        console.log(computerSelection);
        playRound(humanSelection, computerSelection);
      }
      scoreChecker(humanScore, computerScore);
      scoreReset(humanScore, computerScore);
}
    
function scoreReset(firstScore, secondScore){
        var firstScore = 0, secondScore = 0;
}
    
playGame();
    
function getHumanChoice(){
        let selection = prompt("Please choose Rock, Paper, or Scissors")
        let option = selection.toUpperCase();
        switch(option) {
            case "ROCK":
                // console.log("You chose Rock!")
                return "Rock";
            case "PAPER":
                // console.log("You chose Paper!")
                return "Paper";
            case "SCISSORS":
                // console.log("You chose Scissors!")
                return "Scissors";
            default:
                console.log("Please choose Rock, Paper, or Scissors ONLY!")
                getHumanChoice();
        }
}
                    
function getComputerChoice(){
          let genNum = 0;
          genNum = Math.floor(Math.random() * 3)
          switch(genNum) {
                case 0:
                //   console.log("Computer chose Rock!");
                  return "Rock";
                case 1:
                    // console.log("Computer chose Paper!");
                    return "Paper";
                case 2:
                    // console.log("Computer chose Scissors!");
                    return "Scissors";
        }
}
    
    