let board;
let boardContext;


window.onload = function() {
  board = this.document.getElementById('gameBoard');
  boardContext = board.getContext('2d');
   drawEverything()
}

function drawEverything() {
   boardContext.fillStyle = 'black';
   boardContext.fillRect(0,0,board.width, board.height);
   boardContext.fillStyle = 'red';
   boardContext.fillRect(350,250,100,100);
   boardContext.fillStyle = 'white';
   boardContext.fillRect(250,350,100,100);
   boardContext.fillStyle = 'white';
   boardContext.fillRect(450,350,100,100);
   boardContext.fillStyle = 'white';
   boardContext.fillRect(250,150,100,100);
   boardContext.fillStyle = 'white';
   boardContext.fillRect(450,150,100,100);
}