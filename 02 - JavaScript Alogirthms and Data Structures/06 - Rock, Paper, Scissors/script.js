const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
let playerScore = 0;
let computerScore = 0;

function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const choice = Math.floor(Math.random() * 3);
    return options[choice];
}

function hasPlayerWonTheRound(player, computer) {
    return  (
        (player == "Rock" && computer == "Scissors") ||
        (player == "Paper" && computer == "Rock") ||
        (player == "Scissors" && computer == "Paper")
    );        
}

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();

    if (userOption == computerResult) {
        return `It's a tie! Both chose ${userOption}`;
    } else if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++;
        return `Player wins! ${userOption} beats ${computerResult}`;
    } else {
        computerScore++;
        return `Computer wins! ${computerResult} beats ${userOption}`;
    }
}

function showResults(userOption) {
    roundResultsMsg.innerText = `${getRoundResults(userOption)}`;
    playerScoreSpanElement.innerText = `${playerScore}`;
    computerScoreSpanElement.innerText = `${computerScore}`;

    if (playerScore == 3 || computerScore == 3) {
        winnerMsgElement.innerText = playerScore == 3 ? "Player" : "Computer";
        winnerMsgElement.innerText += " has won the game!";
        optionsContainer.style.display = "none";
        resetGameBtn.style.display = "block";
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = "0";
    computerScoreSpanElement.innerText = "0";
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    winnerMsgElement.innerText = "";
    roundResultsMsg.innerText = "";
}

rockBtn.addEventListener("click", function () {
    showResults("Rock");
});
  
paperBtn.addEventListener("click", function () {
    showResults("Paper");
});
  
scissorsBtn.addEventListener("click", function () {
    showResults("Scissors");
});

resetGameBtn.addEventListener("click", resetGame);