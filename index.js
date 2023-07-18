// Options that computer or player can pick
const choices = ["rock", "paper", "scissors"];

// All buttons (choices)
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

// Adding an event listener (click) on all the buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', playRound));

// Score elements
let playerScore = document.getElementById('player_score');
let computerScore = document.getElementById('computer_score');
let tieScore = document.getElementById('tie_score');



// Getting computer choice from the choices array
function getComputerChoice() {
    let randomIndex = Math.floor((Math.random() * choices.length)); //Generating random index
    let computerChoice = choices[randomIndex]; //ComputerChoice gets assigned a random value from an array choices
    return computerChoice;
}


// Function that determinates the winner of the round
function isWinner(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return "Tie";
    }
    else if ((userSelection === "rock" && computerSelection === "scissors") ||
        (userSelection === "paper" && computerSelection === "rock") ||
        (userSelection === "scissors" && computerSelection === "paper")) {
            return "Player";
        }
    else return "Computer";
}


// Playing round
function playRound(event) {
    const button = event.target.closest('.btn');
    const userSelection = button.id;
    const computerSelection = getComputerChoice();
    const roundWinner = isWinner(userSelection, computerSelection);
    
    if (roundWinner == "Player") {
        let player = parseInt(playerScore.textContent);
        playerScore.textContent = player + 1;
    } else if (roundWinner == "Computer") {
        let computer = parseInt(computerScore.textContent);
        computerScore.textContent = computer + 1;
    } else if (roundWinner == "Tie") {
        let tie = parseInt(tieScore.textContent);
        tieScore.textContent = tie + 1;
    }
        console.log(roundWinner);
        updateFinalScore();
}


function updateFinalScore() {
    // Announcing winner
    if (playerScore.textContent == 5) {
        alert("Congratulations! You are the best!");
    } else if (computerScore.textContent == 5) {
        alert("Game over! Better luck next time!")
    } 
    
    // Reseting the scores
    if (playerScore.textContent == 5 || computerScore.textContent == 5) {
        playerScore.textContent = 0;
        computerScore.textContent = 0;
        tieScore.textContent = 0;
    }
};




