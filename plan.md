<!-- 7 columns of a 7x6 grid. 

The first player to get four of their pieces in a row (horizontal, vertical, or diagonal), wins.
When a player wins, maybe display how many moves/time it took them.

Implement Connect-Four using HTML, CSS, and JavaScript. In each game, the players will be sitting at the same mouse & keyboard, alternating turns.
Since they’ll be using the same computer, possible user controls might be; arrow keys for user on right and Z, X, C for user on the left. ***would need to include instructions on page as well for first time users.*** 
Use the mouse

The Functions That Need to be Created


X displayBoard ()---We can write a function to display the board OR we can hard code the actual board in HTML ?? 
--displayInstructions() - this could be something that is appended to the bottom or top of the screen but out of the way of the actual board
--showMessage () - to display whether someone won or whether there’s a tie --also to give the player an option to play again or end game
switchPlayers() - switch between red and black players-- add and remove classes
Me--checkForEndGame() --not sure about the name of this function but it’s to check to see if one of the end game conditions have been met 
Needs to include three additional functions:
horizontal ()
vertical()
diagonally()
Me--createClickEventListeners () listen for the mouse click --or key click (We need to decide which controls were going to use)
dropDiskInColumn () - to place the actual piece in the columns

**we can give the different columns and id to make it easier to maneuver through

Other considerations
During the first meeting we decided to have the board sideways in our data model
Each cell will be initialized with a value of null until it’s no longer emptied
We will use R & B to represent the pieces as they’re dropped
We can use player 1 and player 2 to represent the different players



Display a red or black disc.
Stack red and black discs in a column using a flex box layout.
Display a full board consisting of 7 columns.
Set a click handler function for each column that adds an additional disc.
Take turns! Toggle the color of each successive disc added.
Keep track of what color disc is at each position in the board. You should be able to console.log() debugging output after each move showing the state of the board.
Once a column is full (has 6 discs), don't allow any more discs to be added.
Check whether the last disc added completed a four-in-a-row within the column (vertically).
Check whether the last disc added completed four-in-a-row horizontally.
Check whether the last disc added completed four-in-a-row on either an upward- or downward-sloping diagonal. -->