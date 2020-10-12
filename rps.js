//generate random computer weapon
function computerPlay() {
  let x = Math.random();
  if (x < 0.34) {
    return "rock";
  } else if (x <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

//variables to store User Round Wins and Computer Round Wins
var pw = 0;
var cw = 0;
var p;

function checkGameOver() {
  if (cw >= 5) {
    alert('game over! Computer wins!');
    pw = 0;
    cw = 0;
  } else if (pw >= 5) {
    alert('game over! Player wins!');
    pw = 0;
    cw = 0;
  }
  document.querySelector('#computerScore').innerHTML = cw;
  document.querySelector('#playerScore').innerHTML = pw;
};


//play one round + compare weapons + update round winners + check for Game Over
function round(a, b) {
  a = p;
  b = computerPlay();
  if (a === b) {
    alert("It's a Tie Round! You both played:" + a);
  } else if ((a === "rock" && b === "scissors") || (a === "paper" && b ===
      "rock") || (a === "scissors" && b === "paper")) {
    pw++;
    //document.querySelector('#playerScore').innerHTML = pw + '';
    alert("You Win! You played:" + " " + a + " " +
      "and computer played:" + " " + b);
  } else if ((a === "rock" && b === "paper") || (a === "paper" && b ===
      "scissors") || (a === "scissors" && b === "rock")) {
    cw++;
    //document.querySelector('#computerScore').innerHTML = cw + '';
    alert("You Lost! You played:" + " " + a + " " +
      "and computer played:" + " " + b);
  }
  checkGameOver();
};



//add event listeners to the weapon choice images
const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', () => {
  return p = "rock";
});
btnRock.addEventListener('click', round);

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () => {
  return p = "paper";
});
btnPaper.addEventListener('click', round);

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', () => {
  return p = "scissors";
});
btnScissors.addEventListener('click', round);