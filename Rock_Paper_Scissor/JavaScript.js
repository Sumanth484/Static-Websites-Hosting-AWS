let userScore = 0;
let computerScore = 0;
const images = document.querySelectorAll('img')

const computerWin = () => {
    computerScore += 1;
    document.getElementById("computerscore").innerText = computerScore;
    document.getElementById("message").innerText = "Computer won the game..";
};

const userWin = () => {
    userScore += 1;
    document.getElementById("userscore").innerText = userScore;
    document.getElementById("message").innerText = "User won the game..!!";
};

function genCompChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    let idx = Math.floor(Math.random() * 3);
    return choices[idx];
};

function playGame(name) {
    let compChoice = genCompChoice();
    if (name.toUpperCase() === 'ROCK' && compChoice.toUpperCase() === 'PAPER') {
        computerWin();
    }
    else if (name.toUpperCase() === 'ROCK' && compChoice.toUpperCase() === 'SCISSOR') {
        userWin();
    }
    else if (name.toUpperCase() === 'PAPER' && compChoice.toUpperCase() === 'SCISSOR') {
        computerWin();
    }
    else if (name.toUpperCase() === 'PAPER' && compChoice.toUpperCase() === 'ROCK') {
        userWin();
    }
    else if (name.toUpperCase() === 'SCISSOR' && compChoice.toUpperCase() === 'ROCK') {
        computerWin();
    }
    else if (name.toUpperCase() === 'SCISSOR' && compChoice.toUpperCase() === 'PAPER') {
        userWin();
    }
    else {
        document.getElementById("message").innerText = "Game Draw..";
    }
}

    images.forEach((img) => {
        img.addEventListener("click", () => {
            let name = img.getAttribute("id");
            playGame(name);
        }
        )
    })
document.getElementById("btnrst").addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    document.getElementById("userscore").innerText = userScore;
    document.getElementById("computerscore").innerText = computerScore;
    document.getElementById("message").innerText = "Play the Game..";
}
);


