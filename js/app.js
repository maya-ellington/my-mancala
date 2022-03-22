/*----- constants -----*/

//all pit/mancala values held in single array, start with 4 seeds in each pit
const startMsg = "CLICK TO START";
const player1Msg = "Player 1's Turn!";
const player2Msg = "Player 2's Turn!";

//-----------------------------------------------------

/*----- app's state (variables) -----*/

let player1;
let player2;
let gameArray = [0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4];



//-----------------------------------------------------

/*----- cached element references -----*/




let msgBtn = document.querySelector("#message-display");

// pitBtnValue = 



//-----------------------------------------------------

/*----- event listeners -----*/

//changes initial message to indicate whose turn it is
msgBtn.addEventListener("click", render);
msgBtn.innerHTML = startMsg;

document.querySelector("#game-field").addEventListener('click', gameRound);
//NEED TO ISOLATE SO THAT ONLY PIT VALUES ARE CLICKABLE (WITHIN CIRCLE) & not store


// pit.forEach(function (e) {
//   e.addEventListener("click", gameRound);
// });

//-----------------------------------------------------

/*----- functions -----*/

//render()  //in init function?

//set up values in init function
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

}


//TO DO
//1. function so that when you click pit, value of pit changes to 0 and total number of seeds is
//distributed across all consecutive pits

//?

//key value pairs
//run loop w if statement to find corresponding array element i--
//if statement, if i=0, set i = gameArray.length + 1
//find index for where you are 
//cat/dog/car array method example
//i = foundArrayIndex
//when i = original index + 1 , loop stops
//decrimenting i--
//marbleAmount (value of index, 4), decrement marble count 
//if marbleAmount = 0, break

function gameRound(e){
    
    let userArrayIndex = e.target.getAttribute('id');
    let arrayValue = e.target.innerText;
    // console.log(userArrayIndex)
    // console.log(arrayValue)
    function increaseMancalaArrayCount(arr, indexCount){ //passing in index of circle

        const arrayPositionsToFill = arr[indexCount] //value in game array aka seeds 
        arr[indexCount] = 0 //when selected should go to 0
      
        return addToleft(arr, indexCount -1, arrayPositionsToFill)
                                              //number of seed count
      }
      
      
      function addToleft(arr, startingPoint, positionsTofill){
      
        if(positionsTofill === 0){
          return arr
        }
      
        if(startingPoint < 0){
          startingPoint = arr.length -1 //starts at end of array if you reached beginning
        }
      
        arr[startingPoint] += 1
      
        return addToleft(arr, startingPoint - 1, positionsTofill -1)
        
      }
      
      
      console.log(increaseMancalaArrayCount(gameArray, userArrayIndex))
      setBoard();
      
}



//2. function so that when pit values on player 1 OR player 2 side are all 0, game over
  //when gameArray[1-6] = 0, or gameArray[7-12] = 0, game over
  //winner = 
//triggers message of which player wins based on whose store has the most seed value


const indexCount = 2

const array = [3, 2, 4, 1, 7, 8]

// const arrayPositionsToFill =array[indexCount]
// array[indexCount] = 0




// function increaseMancalaArrayCount(arr, indexCount){ //passing in index of circle

//   const arrayPositionsToFill = arr[indexCount] //value in game array aka seeds 
//   arr[indexCount] = 0 //when selected should go to 0

//   return addToleft(arr, indexCount -1, arrayPositionsToFill)
//                                         //number of seed count
// }


// function addToleft(arr, startingPoint, positionsTofill){

//   if(positionsTofill === 0){
//     return arr
//   }

//   if(startingPoint < 0){
//     startingPoint = arr.length -1 //starts at end of array if you reached beginning
//   }

//   arr[startingPoint] += 1

//   return addToleft(arr, startingPoint - 1, positionsTofill -1)
  
// }


// console.log(increaseMancalaArrayCount(array, 2))









