//scoreBoard 
let player1Score = 0;
document.getElementById("plyr1Score").innerHTML = player1Score;
let player2Score = 0;
document.getElementById("plyr2score").innerHTML = player2Score;

//health initialization
let initialHealthOfplyer1 = (document.getElementById("plyr1").innerHTML = 20);
let initialHealthOfplyer2 = (document.getElementById("plyr2").innerHTML = 20);

//random power for attack
function attackPower(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//function for attack
function isShoot(player) {
  let power = attackPower(1, 5);
  initialHealthOfplyer2 = initialHealthOfplyer2 - power;
  flashBar()
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
  flashBar();
  if (initialHealthOfplyer1 <= 0) {
    initialHealthOfplyer1 = 0;
    alert("player 1 died");
    winner();
    nextMatch();
  }
}

//declearation of winner of game (single set)
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

//new game setup
function nextMatch() {
  alert("New Game");
  initialHealthOfplyer1 = document.getElementById("plyr1").innerHTML = 20;
  initialHealthOfplyer2 = document.getElementById("plyr2").innerHTML = 20;
}

//winnerr of the Match (full game)
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

//reset the scoreBoard
function scoreReset() {
  location.reload();
}

//firing
function flashBar() {
  document.getElementById('flashBar').style.display = 'block';
   setTimeout(noFlashBar, 500)
}

function noFlashBar() {
  document.getElementById('flashBar').style.display = 'none';
}