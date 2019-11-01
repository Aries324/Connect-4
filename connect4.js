// X  Display a red or black disc.

//X Stack red and black discs in a column using a flex box layout.
// XDisplay a full board consisting of 7 columns.
    
// Set a click handler function for each column that adds an additional disc.
// Take turns! Toggle the color of each successive disc added.
// Keep track of what color disc is at each position in the board. You should be able to console.log() debugging output after each move showing the state of the board.
// Once a column is full (has 6 discs), don't allow any more discs to be added.
// Check whether the last disc added completed a four-in-a-row within the column (vertically).
// Check whether the last disc added completed four-in-a-row horizontally.
// Check whether the last disc added completed four-in-a-row on either an upward- or downward-sloping diagonal. -->



let board = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    
]


function drawBoard (grid) {
    
    let tableEl = document.createElement('table');
    tableEl.classList.add('table')

    for (let rowCount = 0; rowCount < grid.length; rowCount++){
        
        let trEl = document.createElement('tr');
        let currentRow = grid [rowCount];
        trEl.className = 'row';
        
        trEl.id = rowCount;

        for (let columnCount = 0; columnCount < currentRow.length; columnCount++){
            let cellEl = document.createElement('td');
             cellEl.className = 'cell';
            cellEl.id = rowCount + "," + columnCount;
            let text = document.createTextNode(currentRow[columnCount]);
            cellEl.appendChild(text);
            trEl.appendChild(cellEl);
        }
        tableEl.appendChild(trEl);
    
    
    } 
document.body.appendChild(tableEl);
} 
drawBoard(board)



let player1;
let player1Color = 'red';
let player2 
let player2Color = 'yellow';
let tableRow = document.querySelectorAll('tr');
let playerMoves = document.querySelectorAll('td');
let activePlayer = document.querySelector('.activePlayer');
const cells = document.querySelectorAll('.cell');
const playAgainBtn = document.querySelector('.playAgain');


let currentPlayer = 1;
let winner;
activePlayer.textContent =  'Player 1 Turn';


for (i = 0; i < board.length; i++){
    playerMoves[i].addEventListener('click', function(e){
        console.log(`${e.target.parentElement.rowIndex},${e.target.cellIndex}`)
    })
};

function switchPlayers(event){
    let column = event.target.cellIndex;
    let row = [];


    for (i = 5; i > -1; i--){
        if (tableRow[i].children[column].style.backgroundColor == 'white'){
            row.push(tableRow[i].children[column]);
            if (currentPlayer === 1){
                row[0].style.backgroundColor = 'red';
                if (checkForHorizontalWin() || checkForVerticalWin() || checkForDiagonal() || checkForDiagonal2()){
                    activePlayer.textContent = 'PLAYER1 WINS';
                    activePlayer.style.color = player1Color;
                    return alert('PLAYER1 WINS!!!');
                }else if (checkForTie()){
                    activePlayer.textContent = 'DRAW!';
                    return alert('DRAW!');
                }else{
                    activePlayer.textContent = 'Player 2 Turn'
                    return currentPlayer = 2;
                }
            }else{
                row[0].style.backgroundColor = 'yellow';
                if (checkForHorizontalWin() || checkForVerticalWin() || checkForDiagonal() || checkForDiagonal2()){
                    activePlayer.textContent = 'PLAYER 2 WINS';
                    activePlayer.style.color = player2Color;
                    return alert('PLAYER 2 WINS!!!');
                }else if (checkForTie()){
                    activePlayer.textContent = 'DRAW!';
                    return alert('DRAW!');
                }else{
                    activePlayer.textContent = 'Player 1 Turn';
                    return currentPlayer = 1;
                }
                
            }
        }
    }
   
}

 
Array.prototype.forEach.call(playerMoves, (cells) => {
    cells.addEventListener('click', switchPlayers);
    // Set all cell to white for new game.
    cells.style.backgroundColor = 'white';
});

function checkForColorMatch(one, two, three, four){
    return (one === two && one === three && one === four && one !== 'white' && one !== undefined);
}

function checkForHorizontalWin(){
    for (let row = 0; row < tableRow.length; row++){
        for (let col =0; col < 4; col++){
           if (checkForColorMatch(tableRow[row].children[col].style.backgroundColor,tableRow[row].children[col+1].style.backgroundColor, 
                                tableRow[row].children[col+2].style.backgroundColor, tableRow[row].children[col+3].style.backgroundColor)){
               return true;
           }
        }
    }
}

function checkForVerticalWin(){
    for (let col = 0; col < 7; col++){
        for (let row = 0; row < 3; row++){
            if (checkForColorMatch(tableRow[row].children[col].style.backgroundColor, tableRow[row+1].children[col].style.backgroundColor,
                                tableRow[row+2].children[col].style.backgroundColor,tableRow[row+3].children[col].style.backgroundColor)){
                return true;
            };
        }   
    }
}

function checkForDiagonal(){
    for(let col = 0; col < 4; col++){
        for (let row = 0; row < 3; row++){
            if (checkForColorMatch(tableRow[row].children[col].style.backgroundColor, tableRow[row+1].children[col+1].style.backgroundColor,
                tableRow[row+2].children[col+2].style.backgroundColor,tableRow[row+3].children[col+3].style.backgroundColor)){
                    return true;
                }
            }
        }

}

function checkForDiagonal2(){
    for(let col = 0; col < 4; col++){
        for (let row = 5; row > 2; row--){
            if (checkForColorMatch(tableRow[row].children[col].style.backgroundColor, tableRow[row-1].children[col+1].style.backgroundColor,
                tableRow[row-2].children[col+2].style.backgroundColor,tableRow[row-3].children[col+3].style.backgroundColor)){
                    return true;
            }
        }
    }
}

function checkForTie(){
    let areCellsFull = []
    for (i=0; i < playerMoves.length; i++){
        if (playerMoves[i].style.backgroundColor !== 'white'){
            areCellsFull.push(playerMoves[i]);
        }
    }
    if (areCellsFull.length === playerMoves.length){
        return true;
    }
}

playAgainBtn.addEventListener('click', () => {
    cells.forEach(slot => {
        slot.style.backgroundColor = 'white';
    });
    activePlayer.style.color = 'black';
    return (currentPlayer === 1 ? activePlayer.textContent = `${player1}'s turn` : activePlayer.textContent = `${player2}'s turn`);
});

//console.assert((checkForVerticalWin()))