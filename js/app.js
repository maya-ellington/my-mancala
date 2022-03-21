/*----- constants -----*/

//all pit/mancala values held in single array, start with 4 seeds in each pit
const gameArray = [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0];
const startMsg = "CLICK TO START";
const player1Msg = "Player 1's Turn!"
const player2Msg = "Player 2's Turn!"

//-----------------------------------------------------




/*----- app's state (variables) -----*/

let player1;
let player2;

let msgBtn = document.querySelector('#message-display');

document.querySelector('.mancala-total-1').innerHTML = gameArray[0];
document.querySelector('.pit-a').innerHTML = gameArray[1];
document.querySelector('.pit-b').innerHTML = gameArray[2];
document.querySelector('.pit-c').innerHTML = gameArray[3];
document.querySelector('.pit-d').innerHTML = gameArray[4];
document.querySelector('.pit-e').innerHTML = gameArray[5];
document.querySelector('.pit-f').innerHTML = gameArray[6];
document.querySelector('.pit-g').innerHTML = gameArray[7];
document.querySelector('.pit-h').innerHTML = gameArray[8];
document.querySelector('.pit-i').innerHTML = gameArray[9];
document.querySelector('.pit-j').innerHTML = gameArray[10];
document.querySelector('.pit-k').innerHTML = gameArray[11];
document.querySelector('.pit-l').innerHTML = gameArray[12];
document.querySelector('.mancala-total-2').innerHTML = gameArray[13];




//-----------------------------------------------------




/*----- cached element references -----*/

// document.querySelector('.pit').addEventListener('click', handleClick);

let pit = document.querySelector('.pit');

msgBtn.innerHTML = startMsg;

//changes initial message to indicate whose turn it is
msgBtn.addEventListener('click', startGame);



//-----------------------------------------------------




/*----- event listeners -----*/

msgBtn.addEventListener('click', init);
init();

pit.addEventListener('click', gameRound)




//-----------------------------------------------------




/*----- functions -----*/





//render()  //in init function?

//set up values in init function
function init() {
}

//when player clicks pit, all seeds in that pit get distributed around each consequtive pit
function startGame(){
    msgBtn.innerHTML = player1Msg
}

// function handleClick() {
// pits1[1] + 1
// }

//WORK THIS OUT?
function gameRound(){
    console.log(pit.innerHTML)
}
