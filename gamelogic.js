function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return "TIE";

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "WIN";
    }

    return "LOSE";
}

module.exports = { getWinner };
