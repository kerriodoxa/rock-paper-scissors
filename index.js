// Options that computer or player can pick
const choices = ["rock", "paper", "scissors"];

// Getting computer choice from the choices array
function getComputerChoice() {
    let randomIndex = Math.floor((Math.random() * choices.length)); //Generating random index
    let computerChoice = choices[randomIndex]; //ComputerChoice gets assigned a random value from an array choices
    return computerChoice;
}

// Getting user choice from the prompt
function getUserChoice() {
    let validatedInput = false;
        while(validatedInput == false) {
            const userChoice = prompt("Pick your choice: rock, paper or scissors?");
            if (userChoice == null) {
                continue;
            }

        const userChoiceLowCase = userChoice.toLowerCase();
            if(choices.includes(userChoiceLowCase)) {
                validatedInput = true;
                return userChoiceLowCase;
            }
        }
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



// Returning round score
function playRound(userSelection, computerSelection) {
    const roundWinner = isWinner(userSelection, computerSelection);
    if (roundWinner == "Tie") {
        return "It is a tie!";
    } else if (roundWinner == "Player") {
        return "Player wins!";
    } else return "Computer wins!";
}



// Function that plays 5 rounds of the game and shows who is a winner
function game() {
    let userScore = 0; // player score
    let computerScore = 0; // computer score

    // Looping through the 5 rounds
    for (let round = 1; round <= 5; round++) {
        let userSelection = getUserChoice(); //userSelection has the value that function getUserChoice() returns
        let computerSelection = getComputerChoice(); //computerSelection has the value that function getComputerChoice returns

        // Logging number of rounds within the console
        console.log(`Round ${round}`);

        // Running playRound function for 5 times
        playRound(userSelection, computerSelection);

        // Increasing the scores through conditions
        if (isWinner(userSelection, computerSelection) == "Player") {
            userScore++;
        } else if (isWinner(userSelection, computerSelection) == "Computer") {
            computerScore++;
        };

        // Logging choices and round results within the console
        console.log("User's choice:", userSelection);
        console.log("Computer's choice:", computerSelection);
        console.log(playRound(userSelection, computerSelection));
}

    // Logging final result depending on both player and computer score
    console.log(`Player: ${userScore}, Computer: ${computerScore}`);
    if (userScore < computerScore) {
        console.log("Better luck next time! Computer wins the game!")
    } else if (userScore > computerScore) {
        console.log("Congratulations! Player wins!");
    } else {
        console.log("It is a draw!")
    }
}

// Running the game
game();

