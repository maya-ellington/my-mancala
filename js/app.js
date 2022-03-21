/*----- constants -----*/

// const marbles = 48; //total number of marbles in game 

/*----- app's state (variables) -----*/

let pits1;
let pits2;
let store1;
let store2;

/*----- cached element references -----*/

// document.querySelector('.pit').addEventListener('click', handleClick);

let pit = document.querySelector('.pit');

//changes initial message to indicate whose turn it is
const startBtn = document.querySelector('#message-display');
startBtn.addEventListener('click', startGame);


/*----- event listeners -----*/

startBtn.addEventListener('click', init);
init();

pit.addEventListener('click', gameRound)

/*----- functions -----*/

//render()  //in init function?

//set up values in init function
function init() {
    // let pits1 = [4, 4, 4, 4, 4, 4];
    // let pits2 = [4, 4, 4, 4, 4, 4];
    let store1 = 0;
    let store2 = 0;
    
}

//when player clicks pit, all seeds in that pit get distributed around each consequtive pit
function startGame(){
    startBtn.innerHTML = "Player 1's Turn!"
}

// function handleClick() {
// pits1[1] + 1
// }

//WORK THIS OUT
function gameRound(){
    console.log(pit.innerHTML)
}
