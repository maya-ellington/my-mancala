/*----- constants -----*/

const startMsg = "CLICK TO START";
const player1Msg = "Player 1's Turn!";
const player2Msg = "Player 2's Turn!";
const player1Wins = "PLAYER 1 WINS!!!";
const player2Wins = "PLAYER 2 WINS!!!";
const gameOver = "GAME OVER!";
const playersTie = "IT'S A TIE!!!";
const startSound = new Audio("./media/start.wav");
const playSound = new Audio("./media/play.wav");

/*----- app's state (variables) -----*/

let player; //changes state between player 1/2 and game over
let gameArray = [0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4]; //initial game set up
let winnerTotal;

//quick game over array:
// let gameArray = [0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4];

//shorter game array:
//let gameArray = [0, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3];

/*----- cached element references -----*/

let msgBtn = document.querySelector("#message-display");
msgBtn.innerHTML = startMsg;

let gamePit = document.querySelector("#game-field");

let restartBtn = document.querySelector("#restart");

/*----- event listeners -----*/

msgBtn.addEventListener("click", render);

gamePit.addEventListener("click", gameRound);

restartBtn.addEventListener("click", restart);

/*----- functions -----*/

// //game instructions
// function PopUp(hideOrshow) {
//   if (hideOrshow == 'hide') document.getElementById('ac-wrapper').style.display = "none";
//   else document.getElementById('ac-wrapper').removeAttribute('style');
// }
// window.onload = function () {
//   setTimeout(function () {
//       PopUp('show');
//   }, 0);
// }

//??POTENTIALLY SHORTEN THIS WITH A LOOP document.getElementById("i").innerHTML = gameArray[i];
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
  // if (player === player1Msg || player === player2Msg) return;
  startSound.play();
  setBoard();
  player = player1Msg;
  buttonMsg();
}

function restart() {
  gameArray = [0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4];
  render();
}

//toggle between player 1/2 and display in message
function playerTogglePrintMessage() {
  msgBtn.innerHTML = player;
  if (player === player1Msg) {
    return (player = player2Msg), buttonMsg();
  }
  if (player === player2Msg) {
    return (player = player1Msg), buttonMsg();
  }
}

//determine winner
function declareWinner() {
  if (gameArray[0] > gameArray[13])
    document.querySelector("#declare-winner").innerHTML = player1Wins;
  if (gameArray[0] < gameArray[13])
    document.querySelector("#declare-winner").innerHTML = player2Wins;
  if (gameArray[0] === gameArray[13])
    document.querySelector("#declare-winner").innerHTML = playersTie;
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
    return (player = gameOver), declareWinner(), buttonMsg();

  if (
    gameArray[8] == 0 &&
    gameArray[9] == 0 &&
    gameArray[10] == 0 &&
    gameArray[11] == 0 &&
    gameArray[12] == 0 &&
    gameArray[13] == 0
  )
    return (player = gameOver), declareWinner(), buttonMsg();
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

  if (player === player1Msg) {
    //isolates buttons for player 1 turn
    if (
      e.target.id === "8" ||
      e.target.id === "9" ||
      e.target.id === "10" ||
      e.target.id === "11" ||
      e.target.id === "12" ||
      e.target.id === "13"
    )
      return;
  } else if (player === player2Msg) {
    //isolates buttons for player 2 turn
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

  let userArrayIndex = e.target.getAttribute("id");

  function increaseMancalaArrayCount(arr, indexCount) {
    //thanks Jim
    //passing in index of circle

    const arrayPositionsToFill = arr[indexCount]; //value in game array aka seeds
    arr[indexCount] = 0; //when selected should go to 0

    //1 & 13,, 12 & 2,, 11 & 3,,  10 & 4,, 9 & 5 ,, 8 & 6 pairs of pits on opposite sides (array position)
    // if(arr[1] === 1){
    //   let marbles = arr[13]
    //   arr[13] = 0;
    //   arr[0] += marbles
    // }
    // if(arr[13] === 1){
    //   let marbles = arr[1]
    //   arr[1] = 0;
    //   arr[7] += marbles
    // }
    // if(arr[2] === 1){
    //   let marbles = arr[12]
    //   arr[12] = 0;
    //   arr[0] += marbles
    // }
    // if(arr[12] === 1){
    //   let marbles = arr[2]
    //   arr[2] = 0;
    //   arr[7] += marbles
    // }
    // if(arr[3] === 1){
    //   let marbles = arr[11]
    //   arr[11] = 0;
    //   arr[0] += marbles
    // }
    // if(arr[11] === 1){
    //   let marbles = arr[3]
    //   arr[13] = 0;
    //   arr[7] += marbles
    // }
    // if(arr[4] === 1){
    //   let marbles = arr[10]
    //   arr[10] = 0;
    //   arr[0] += marbles
    // }
    // if(arr[10] === 1){
    //   let marbles = arr[4]
    //   arr[4] = 0;
    //   arr[7] += marbles
    // }
    // if(arr[5] === 1){
    //   let marbles = arr[9]
    //   arr[9] = 0;
    //   arr[0] += marbles
    // }
    // if(arr[9] === 1){
    //   let marbles = arr[5]
    //   arr[5] = 0;
    //   arr[7] += marbles
    // }
    // if(arr[6] === 1){
    //   let marbles = arr[8]
    //   arr[8] = 0;
    //   arr[0] += marbles
    // }
    // if(arr[8] === 1){
    //   let marbles = arr[6]
    //   arr[6] = 0;
    //   arr[7] += marbles
    // }

    return addToleft(arr, indexCount - 1, arrayPositionsToFill);
    //number of seed count
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

  playerTogglePrintMessage();

  setBoard();

  gameOverMessage();
}
