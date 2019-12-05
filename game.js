let board;
let boardContext;

let snake = 50;
let snakeSpeed = 5;

window.onload = function() {
  board = this.document.getElementById('gameBoard');
  boardContext = board.getContext('2d'); 

  let framesPerSecond = 30;
  this.setInterval(function() {
    drawEverything();
    moveEverything();
  }, 1000/framesPerSecond);
   
}

function drawEverything() {
  // The Game Board
  createPiece(0, 0, board.width, board.height, 'black');
   
  // The Prey/Food
  createCircle(350,250,10,'red'); 


// The Snake
  createPiece(snake,200,50,25,'green');

};

function createCircle(centerX, CenterY, radius, color) {
  boardContext.fillStyle = color;
  boardContext.beginPath();
  boardContext.arc(centerX,CenterY,radius,0,Math.PI*2, true);
  boardContext.fill();
}

function moveEverything() {
  snake += snakeSpeed;

}

function createPiece(leftX, topY, width, height, color) {
  boardContext.fillStyle = color;
  boardContext.fillRect(leftX, topY, width, height);
}


/*  Side Note - Need a function that will increase the snakes size when item is eaten.

  function grow() {
    if(snake eats )
    snakeSize += ??
    boardContext.fillRect(75,200,snakeSize,25);
    
  }

  2nd** Condition for boundaries

  {  
  if(snake >== board.width) {
    console.log('Games Over')
  }

  }
*/