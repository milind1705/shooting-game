function start(startgame) {}
let player1Score = 0;
document.getElementById("plyr1Score").innerHTML = player1Score;
let player2Score = 0;
document.getElementById("plyr2score").innerHTML = player2Score;

let initialHealthOfplyer1 = (document.getElementById("plyr1").innerHTML = 20);
let initialHealthOfplyer2 = (document.getElementById("plyr2").innerHTML = 20);

function attackPower(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function isShoot(player) {
  let power = attackPower(1, 5);
  initialHealthOfplyer2 = initialHealthOfplyer2 - power;
  document.getElementById("plyr2").innerHTML = initialHealthOfplyer2;
  if (initialHealthOfplyer2 <= 0) {
    initialHealthOfplyer2 = 0;
    alert("player 2 died");
    winner();
    nextMatch();
  }
}
function isShoot1(player) {
  let power = attackPower(1, 5);
  initialHealthOfplyer1 = initialHealthOfplyer1 - power;
  document.getElementById("plyr1").innerHTML = initialHealthOfplyer1;
  if (initialHealthOfplyer1 <= 0) {
    initialHealthOfplyer1 = 0;
    alert("player 1 died");
    winner();
    nextMatch();
  }
}

function winner() {
  if (initialHealthOfplyer1 <= 0) {
    alert("Player 2 won");
    player2Score++;
    document.getElementById("plyr2score").innerHTML = player2Score;
  } else if (initialHealthOfplyer2 <= 0) {
    alert("Player 1 won");
    player1Score++;
    document.getElementById("plyr1Score").innerHTML = player1Score;
  }
  winMatch();
}
function nextMatch() {
  alert("New Game");
  initialHealthOfplyer1 = document.getElementById("plyr1").innerHTML = 20;
  initialHealthOfplyer2 = document.getElementById("plyr2").innerHTML = 20;
}

function winMatch() {
  if (player1Score == 3) {
    alert("Player 1 won the Match");
    scoreReset();
  }
  if (player2Score == 3) {
    alert("Player 2 won the Match");
    scoreReset();
  }
}

function scoreReset() {
  location.reload();
}
