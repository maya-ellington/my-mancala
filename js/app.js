/*----- constants -----*/

const startMsg = "CLICK TO START";
const player1Msg = "Player 1's Turn!";
const player2Msg = "Player 2's Turn!";
const player1Wins = "PLAYER 1 WINS!!!";
const player2Wins = "PLAYER 2 WINS!!!";
const gameOver = "GAME OVER!";
//-----------------------------------------------------

/*----- app's state (variables) -----*/

let player; //changes state between player 1 and 2
let gameArray = [0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4]; //initial game set up

//-----------------------------------------------------

/*----- cached element references -----*/

let msgBtn = document.querySelector("#message-display");

msgBtn.innerHTML = startMsg;

//-----------------------------------------------------

/*----- event listeners -----*/

//changes initial message to indicate whose turn it is
msgBtn.addEventListener("click", render);

document.querySelector("#game-field").addEventListener("click", gameRound);
document.querySelector("#game-field").addEventListener("click", setBoard);

// pit.forEach(function (e) {
//   e.addEventListener("click", gameRound);
// });

//-----------------------------------------------------

/*----- functions -----*/

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

//when player clicks pit, all seeds in that pit get distributed around each consequtive pit
function render() {
  msgBtn.innerHTML = player1Msg;
  setBoard();
  player = player1Msg;
}

function playerTogglePrintMessage() {
  msgBtn.innerHTML = player;
}

function gameRound(e) {
  if (e.target.className === "mancala-2" || e.target.className === "mancala-1")
    return;

  playerTogglePrintMessage();

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

  let userArrayIndex = e.target.getAttribute("id");

  function increaseMancalaArrayCount(arr, indexCount) {
    //thanks Jim
    //passing in index of circle

    const arrayPositionsToFill = arr[indexCount]; //value in game array aka seeds
    arr[indexCount] = 0; //when selected should go to 0

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
  
  //when gameArray[1-6] = 0, or gameArray[7-12] = 0, game over
  if (
    gameArray[1] == 0 &&
    gameArray[2] == 0 &&
    gameArray[3] == 0 &&
    gameArray[4] == 0 &&
    gameArray[5] == 0 &&
    gameArray[6] == 0
  )
    return (player = gameOver);

  if (
    gameArray[8] == 0 &&
    gameArray[9] == 0 &&
    gameArray[10] == 0 &&
    gameArray[11] == 0 &&
    gameArray[12] == 0 &&
    gameArray[13] == 0
  )
    return (player = gameOver);

  if (player === player1Msg) {
    return (player = player2Msg);
  }
  if (player === player2Msg) {
    return (player = player1Msg);
  }
}

//2. function so that when pit values on player 1 OR player 2 side are all 0, game over
//
//winner =
//triggers message of which player wins based on whose store has the most seed value
