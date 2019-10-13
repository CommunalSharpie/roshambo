let userScore = 0;
let computerScore =0;
const userScore_span = document.getElementById("user-score"); // HTML variables that store dom elements
const computerScore_span = document.getElementById("computer-score"); // indicated with "_span" because it's in the HTML under a <span> tag
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
// Now, we have "cached the dom" (Saved reference to the domain. Saves us computation time b/c we don't need to fetch references to these elements each time we use them.)


function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getWinningEmoji() {
    const winEmojis = ["🥂", "😄", "🤙", "🥇", "Big 🧠", "🌟", "🏆", "👌", "💪", "🤗"]
    return winEmojis[Math.floor(Math.random() * winEmojis.length)]
}

function getLosingEmoji() {
    const winEmojis = ["😈", "🖕", "👎", "💀", "💩", "💥", "😥", "🤦", "🤬", "🤮"]
    return winEmojis[Math.floor(Math.random() * winEmojis.length)]
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = (userChoice+smallUserWord + " beats "
    + computerChoice+smallCompWord + ". You win! " + getWinningEmoji())
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = (userChoice+smallUserWord + " loses to "
    + computerChoice+smallCompWord + ". You lose! " + getLosingEmoji());
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = (userChoice+smallUserWord + " ties "
    + computerChoice+smallCompWord + ". Draw! 🤜🤛");
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    if ((userChoice == "Rock" && computerChoice == "Scissors") /*Rock beats scissors*/ || 
    (userChoice == "Paper" && computerChoice == "Rock") /*Paper beats rock*/ || 
    (userChoice == "Scissors" && computerChoice == "Paper")) /*Scissors beats paper*/ {
        win(userChoice, computerChoice);
    } else if (userChoice == computerChoice) {
        draw(userChoice, computerChoice);
    } else {
        lose(userChoice, computerChoice);
    }
}

function main() {

    rock_div.addEventListener('click', function() {
        game("Rock");
    })

    paper_div.addEventListener('click', function() {
        game("Paper");
    })

    scissors_div.addEventListener('click', function() {
        game("Scissors");
    })

}

main();