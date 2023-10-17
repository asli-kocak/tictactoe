
//Array representing empty grid 
var board =    [" ", " ", " ", 
                " ", " ", " ", 
                " ", " ", " "];

var turn = "x";


//Determine who starts game randomly
function startGame() {
    if (Math.random() < 0.5) {
        turn = "o";
    }
    document.getElementById("turn").innerHTML = "It's " + turn + "'s turn! </br>";
}


// Create a button grid as the general game board
function createGrid() {
    //Create 9 buttons with different ID's
    for (let i = 1; i < 10; i++) {
        var button = document.createElement("button");
        button.textContent = " ";
        let buttonID = i;
        button.id = buttonID;  // Set the ID of the button
        document.body.appendChild(button);  
        
        // seperate buttons so that there are 3 buttons per row
        if (i % 3 == 0){
            document.write("<br>");
        }

        // define behaviour when the button is clicked
        button.addEventListener ("click", function(event) {
            ifClicked(event.target, i);
        });
        
    }
}


//Function defining behavior when a button is clicked
function ifClicked(button, ID) {

    // check if the clicked button is already filled
    if(board[ID-1] == " "){
        //fill the button with the symbol of whoever's turn it is
        board[ID - 1] = turn;


        button.textContent = turn;

        //switch turns 
        if (turn == "x") {
            turn = "o"
        } else if (turn == "o") {
            turn = "x";
        }
        document.getElementById("turn").innerHTML = "It's " + turn + "'s turn! </br>";
    }


    //check if there is a winner
    let result = checkWhoWon();
    if (result != 0){
        // announce the winner!
        if (result == "tie!"){
            document.getElementById("turn").innerHTML = result + "!! </br>";
        } else {
            document.getElementById("turn").innerHTML = result + " wins!!! </br>";
        }
    }
}



// function to check if anyone won
function checkWhoWon(){

    let filled = true;

    //check if there empty spaces in the board.
    for (let i = 0; i < 9; i++) {
        if (board[i] == " ") {
            filled = false;
        }
    }

    // HORIZONTAL CHECKS
    if((board[0] == board[1] && board[1] == board[2])){
        return board[0];
    } else if ((board[3] == board[4] && board[4] == board[5])){
        return board[3];
    } else if ((board[6] == board[7] && board[7] == board[8])){
        return board[6];

    // VERTICAL CHECKS
    } else if ((board[0] == board[3] && board[3] == board[6])){
        return board[0];
    } else if ((board[1] == board[4] && board[4] == board[7])){
        return board[1];
    } else if ((board[2] == board[5] && board[5] == board[8])){
        return board[2]; 

    // DIAGONAL CHECKS
    } else if ((board[0] == board[4] && board[4] == board[8])){
        return board[0];
    } else if ((board[2] == board[4] && board[4] == board[6])){
        return board[2];
    
    // If there can't be a new turn
    } else if (filled == true) {
        return "tie!";
    // If the game continuing
    } else {
        return 0;
    }
}