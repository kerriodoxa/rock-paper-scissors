// All the options that computer or user can pick
const choices = ["rock", "paper", "scissors"];

// Getting computer choice from the choices array
function getComputerChoice() {
    // Generating random index number for an array called choices
    let computerChoiceIndex = Math.floor(Math.random() * choices.length);

    // computerChoice gets assigned a random value from an array called choices
    let computerChoice = choices[computerChoiceIndex];

    // Just returning the value of computerChoice
    return computerChoice;
}


// Function that determinates the winner
function isWinner(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return "Tie!";
    }
    else if ((userSelection === "rock" && computerSelection === "scissors") ||
        (userSelection === "paper" && computerSelection === "rock") ||
        (userSelection === "scissors" && computerSelection === "paper")) {
            return "Player";
        }
    else return "Computer";
}

// Function which starts the round and returns winner as a result
function playRound(userSelection, computerSelection) {
    let result = isWinner(userSelection, computerSelection);
    if (result === "Tie!") {
        return "It is a tie!";
    } else if (result === "Player") {
        return "Player wins! Congratulations!" 
    } else if (result === "Computer") {
        return "Computer wins! Better luck next time!"
    }
}


// userselection value is the value of the prompt, converted to lower case
let userSelection = prompt("What is your choice?").toLowerCase();

// computer selection value is the value from the function getComputerChoice(random value from the array)
let computerSelection = getComputerChoice();

// Logging results in the console
function resultLog() {
    // If userSelection is anything other than the values in the choices array
    if (!choices.includes(userSelection)) {
        console.log("Invalid input! Please refresh the page and enter a valid option!")
    }
    // If userSelection is a valid choice
    else {
    console.log(playRound(userSelection, computerSelection));
    console.log("User's choice:", userSelection);
    console.log("Computer's choice:", computerSelection);
    }
}

resultLog();