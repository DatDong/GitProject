let board = [];
for(let i =0 ;i<5;i++){
    board[i] =[];
    for(let j=0;j<5;j++) {
        board[i][j] = 0;
    }
}
console.log(board);

function renderBoard() {
    let output = "";
    for(let i =0 ;i<5;i++){
        for(let j=0;j<5;j++) {
            output += board[i][j] + "\t";
        }
        output +="\n"
    }
    console.log(output);
}
renderBoard();

function changeValue(){
    let i = 3;
    let j=3;
    board[i][j] =1;
    renderBoard();
}
changeValue();