/*----- constants -----*/

const startMsg = "CLICK TO START";
const player1Msg = "Player 1's Turn!";
const player2Msg = "Player 2's Turn!";
const player1Wins = "PLAYER 1 WINS!!!";
const player2Wins = "PLAYER 2 WINS!!!";
const gameOver = "GAME OVER!";
const playersTie = "IT'S A TIE!!!";
const startSound = new Audio("./media/start.wav"); //source: freesound.org
const playSound = new Audio("./media/play.wav"); //source: freesound.org
const endSound = new Audio("./media/end.wav"); //source: freesound.org
const collectSound = new Audio("./media/collect.wav"); //source: freesound.org
const modal = document.getElementById("instrModal");
const btn = document.getElementById("instrBtn");
const span = document.getElementsByClassName("close")[0];
const player1Style = "rgb(44, 88, 211)";
const player2Style = "rgb(189, 11, 224)";
const startTieStyle = "rgb(127 186 191)";


/*----- app's state (variables) -----*/

let player; //changes state between player 1/2 and game over
let gameArray = [0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4]; //initial game set up
let winnerTotal;

/*----- cached element references -----*/

let msgBtn = document.querySelector("#message-display");
msgBtn.innerHTML = startMsg;

let gamePit = document.querySelector("#game-field");

let restartBtn = document.querySelector("#restart");

/*----- event listeners -----*/

msgBtn.addEventListener("click", render);

gamePit.addEventListener("click", gameRound);

restartBtn.addEventListener("click", restart);

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
/*----- functions -----*/

//prints array values to the game board
function setBoard() {
  document.getElementById("0").innerHTML = gameArray[0];
  document.getElementById("1").innerHTML = gameArray[1];
  document.getElementById("2").innerHTML = gameArray[2];
  document.getElementById("3").innerHTML = gameArray[3];
  document.getElementById("4").innerHTML = gameArray[4];
  document.getElementById("5").innerHTML = gameArray[5];
  document.getElementById("6").innerHTML = gameArray[6];
  document.getElementById("7").innerHTML = gameArray[7];
  document.getElementById("8").innerHTML = gameArray[8];
  document.getElementById("9").innerHTML = gameArray[9];
  document.getElementById("10").innerHTML = gameArray[10];
  document.getElementById("11").innerHTML = gameArray[11];
  document.getElementById("12").innerHTML = gameArray[12];
  document.getElementById("13").innerHTML = gameArray[13];
}

function buttonMsg() {
  msgBtn.innerHTML = player;
}

//call at start
function render() {
  startSound.play();
  setBoard();
  player = player1Msg;
  buttonMsg();
  msgBtn.style.background = player1Style;
}

function restart() {
  gameArray = [0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4];
  render();
  document.querySelector("#declare-winner").innerHTML = "";
}

//toggle between player 1/2 and display in message
function playerTogglePrintMessage() {
  msgBtn.innerHTML = player;
  if (player === player1Msg) {
    return (
      (player = player2Msg),
      buttonMsg(),
      (msgBtn.style.background = player2Style)
    );
  }
  if (player === player2Msg) {
    return (
      (player = player1Msg),
      buttonMsg(),
      (msgBtn.style.background = player1Style)
    );
  }
}

//determine winner
function declareWinner() {
  if (gameArray[0] > gameArray[7])
    return (
      (document.querySelector("#declare-winner").style.background =
      player1Style),
      (document.querySelector("#declare-winner").innerHTML = player1Wins)
    );
  if (gameArray[7] > gameArray[0])
    return (
      (document.querySelector("#declare-winner").style.background =
      player2Style),
      (document.querySelector("#declare-winner").innerHTML = player2Wins)
    );
  if (gameArray[0] === gameArray[7])
    return (
      (document.querySelector("#declare-winner").style.background =
      startTieStyle),
      (document.querySelector("#declare-winner").innerHTML = playersTie)
    );
}

//declare game over if either side of the board is empty
function gameOverMessage() {
  if (
    gameArray[1] == 0 &&
    gameArray[2] == 0 &&
    gameArray[3] == 0 &&
    gameArray[4] == 0 &&
    gameArray[5] == 0 &&
    gameArray[6] == 0
  )
    return (
      (player = gameOver),
      declareWinner(),
      buttonMsg(),
      (msgBtn.style.background = startTieStyle),
      endSound.play()
    );

  if (
    gameArray[8] == 0 &&
    gameArray[9] == 0 &&
    gameArray[10] == 0 &&
    gameArray[11] == 0 &&
    gameArray[12] == 0 &&
    gameArray[13] == 0
  )
    return (
      (player = gameOver),
      declareWinner(),
      buttonMsg(),
      (msgBtn.style.background = startTieStyle),
      endSound.play()
    );
}

function delaySound() {
  setTimeout(function () {
    collectSound.play();
  }, 500);
}

//collect marbles that are on the other side of a single marble
function collectSingleMarble() {
  if (player === player1Msg){
    if (gameArray[1] === 1) {
      let marbles = gameArray[13];
      gameArray[13] = 0;
      gameArray[0] += marbles;
      delaySound();
    }
    if (gameArray[2] === 1) {
      let marbles = gameArray[12];
      gameArray[12] = 0;
      gameArray[0] += marbles;
      delaySound();
    }
    if (gameArray[3] === 1) {
      let marbles = gameArray[11];
      gameArray[11] = 0;
      gameArray[0] += marbles;
      delaySound();
    }
    if (gameArray[4] === 1) {
      let marbles = gameArray[10];
      gameArray[10] = 0;
      gameArray[0] += marbles;
      delaySound();
    }
    if (gameArray[5] === 1) {
      let marbles = gameArray[9];
      gameArray[9] = 0;
      gameArray[0] += marbles;
      delaySound();
    }
    if (gameArray[6] === 1) {
      let marbles = gameArray[8];
      gameArray[8] = 0;
      gameArray[0] += marbles;
      delaySound();
    }
  }
  if (player === player2Msg){
    if (gameArray[13] === 1) {
      let marbles = gameArray[1];
      gameArray[1] = 0;
      gameArray[7] += marbles;
      delaySound();
    }
    
    if (gameArray[12] === 1) {
      let marbles = gameArray[2];
      gameArray[2] = 0;
      gameArray[7] += marbles;
      delaySound();
    }
    
    if (gameArray[11] === 1) {
      let marbles = gameArray[3];
      gameArray[13] = 0;
      gameArray[7] += marbles;
      delaySound();
    }
    
    if (gameArray[10] === 1) {
      let marbles = gameArray[4];
      gameArray[4] = 0;
      gameArray[7] += marbles;
      delaySound();
    }
    
    if (gameArray[9] === 1) {
      let marbles = gameArray[5];
      gameArray[5] = 0;
      gameArray[7] += marbles;
      delaySound();
    }
    if (gameArray[8] === 1) {
      let marbles = gameArray[6];
      gameArray[6] = 0;
      gameArray[7] += marbles;
      delaySound();
    }
  }
}

function gameRound(e) {
  //disable clicks on board until board is set with marble values
  if (e.target.innerHTML === "") return;

  //cannot click within mancala store values
  if (e.target.className === "mancala-2" || e.target.className === "mancala-1")
    return;

  //isolate click within pit circle only
  if (e.target.classList[0] !== "pit") return;

  //cannot click on pits containing 0 marbles
  if (e.target.innerHTML === "0") return;

  //cannot select pits if game over ADD LOGIC FOR GAME WINNER!
  if (player === gameOver) return;

  
  if (player === player1Msg) { //isolates buttons for player 1 turn
    if (
      e.target.id === "8" ||
      e.target.id === "9" ||
      e.target.id === "10" ||
      e.target.id === "11" ||
      e.target.id === "12" ||
      e.target.id === "13"
    )
      return;
  } else if (player === player2Msg) {    //isolates buttons for player 2 turn

    if (
      e.target.id === "1" ||
      e.target.id === "2" ||
      e.target.id === "3" ||
      e.target.id === "4" ||
      e.target.id === "5" ||
      e.target.id === "6"
    )
      return;
  }
  
  playSound.play();

  //grabs the array index value that is attached to pit IDs
  let userArrayIndex = e.target.getAttribute("id");

  function increaseMancalaArrayCount(arr, indexCount) {
    //thanks Jim
    //passing in index of circle

    const arrayPositionsToFill = arr[indexCount]; //value in game array aka marbles
    arr[indexCount] = 0; //when selected should go to 0

    return addToleft(arr, indexCount - 1, arrayPositionsToFill);
    //number of marble count
  }

  function addToleft(arr, startingPoint, positionsTofill) {
    if (positionsTofill === 0) {
      return arr;
    }

    if (startingPoint < 0) {
      startingPoint = arr.length - 1; //starts at end of array if you reached beginning
    }

    arr[startingPoint] += 1;

    return addToleft(arr, startingPoint - 1, positionsTofill - 1);
  }
  increaseMancalaArrayCount(gameArray, userArrayIndex);

  collectSingleMarble();

  playerTogglePrintMessage();

  setBoard();

  gameOverMessage();
}
