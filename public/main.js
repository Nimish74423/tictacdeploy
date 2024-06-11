let numPlays = 0;
let currentPlayer = 'X';
let gameFinished = false;
let currentPlays = {
    "X":[],
    "O":[]
};
const winningPositions = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];
$(document).ready(function(){
    if(!gameFinished){
    $('.cell').on('click', function(){
        numPlays++;
        $(this).text(currentPlayer);
        currentPlays[currentPlayer].push(parseInt($(this).attr('data-index')));
        
        if(isWinner()){
            showGameResult('win');
        }
        if(!gameFinished && isDraw()){
            showGameResult('draw');
        }

        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        

    });
}
});


function playAgain(){
     numPlays = 0;
 currentPlayer = 'X';
 gameFinished = false;
 currentPlays = {
    "X":[],
    "O":[]
};
$('.cell, #gameResult').text('');

}
function showGameResult(type){
    gameFinished = true;
    if(type === 'win'){
        $("#gameResult").text('Winner is ' + currentPlayer);

    }else{
        $("#gameResult").text('DRAW!');

    }
    $('#gameResult').append(`<p id = "playAgain" onclick ="playAgain()">Play Again</p>`);

}

function isWinner(){
    if(numPlays < 5){
        return;
    }

    for(let i = 0; i < winningPositions.length; i++){
        let isWinner = true;

        for(let j =0; j < winningPositions[i].length; j++){
            if($.inArray(winningPositions[i][j], currentPlays[currentPlayer]) < 0){
                isWinner = false;
                break;
            }
        }

        if(isWinner){
            return true;
        }
    }
    return false;

}
function isDraw(){
    return numPlays ===9;
}