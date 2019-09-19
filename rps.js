//generate random computer weapon
function computerPlay() {
  let x = Math.random();
  if(x < 0.34){
    return "rock";
  }
  else if(x <= 0.66){
    return "paper";
  }
  else {
    return "scissors";
  }
}
//variables to track round winners
var uw = 0;
var cw = 0;

//play one round + compare weapons + update round winners
function round(a, b) {
  var p = prompt("Please, enter one out of three weapons: \
  'rock', 'paper', 'scissors'");
  var userPlay = p.toLowerCase();
  a = userPlay;
  b = computerPlay();
  if(a === b){
    return "It's a Tie!";
  }
  else if((a === "rock" && b === "scissors") || (a === "paper" && b ===
          "rock") || (a === "scissors" && b === "paper")) {
    uw += 1;
    return "You Win! You played:" + " " + a + " " +
    "and computer played:" + " " + b;
    }
  else if((a === "rock" && b === "paper") || (a === "paper" && b ===
          "scissors") || (a === "scissors" && b === "rock")){
    cw += 1;
    return "You Lost! You played:" + " " + a + " " +
    "and computer played:" + " " + b;

  }
  else {
    alert("Wrong entry. Please, select one out of three weapons: \
    'rock', 'paper', 'scissors'");
    round();
  }
};

//play a 5 round game and alert results
function game() {
  for (i = 0; i < 5; i++) {
    round();
  };
  if(uw > cw) {
    return "Player won!";
  }
  else if(uw < cw) {
    return "Computer won!"
  }
  else{
    return "It's a tie!"
  }
}
