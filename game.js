// Testing the new branch

let board;
let boardContext;

let snake = [{x:400, y:300}];
let snakeL = 25;
const snakeH = 25;
let snakeSpeed = 10;
let snakeHead = snake[0];
let snakeTail = snake[snake.length - 1];

let ballX = 412;
let ballY = 312;
let direction;

window.onload = function() {
  board = this.document.getElementById('gameBoard');
  boardContext = board.getContext('2d'); 
  drawBoard();
  createSnake();
  createBall();
  console.log(snakeTail);

  setInterval(function() {
    drawBoard();
    createSnake();
    createBall();
    checkBoundaries();

  }, 300);

   document.addEventListener('keydown', (event) => {
    snakeMovement(event)
  })
   
}

function drawBoard() {
  boardContext.fillStyle = 'black';
  boardContext.fillRect(0, 0, board.width, board.height);
}

function createBall() {
  // respawns a new ball in a random location when eaten.
  if(snakeHead.y <= ballY && snakeHead.y+snakeH > ballY){
    grow();
    ballX = Math.floor(Math.random()*78)*10;
    ballY = Math.floor(Math.random()*58)*10;

  } else{
    boardContext.fillStyle = 'red';
    boardContext.beginPath();
    boardContext.arc(ballX,ballY,10,0,Math.PI*2, true);
    boardContext.fill();
     }
}

function createSnake() {
    snake.forEach(link => {
    boardContext.fillStyle = 'green';
    boardContext.fillRect(link.x, link.y, snakeH, snakeL);

    
  })
  

  switch(direction){
  case 'up':
    snakeHead.y -= snakeSpeed;
    break;
  case 'down':
      snakeHead.y += snakeSpeed;
    break;
  case 'left':
      snakeHead.x -= snakeSpeed;
    break
  case 'right':
      snakeHead.x += snakeSpeed;
  default:
    console.log('dead')
} 
  console.log(snake[0].x, snake[0].y)

}


function snakeMovement(event) {
  action = event.keyCode;
  
  switch(action) {
    case 38:
    case 87:
      direction = 'up';
      createSnake();
      break;
    case 40:
    case 83:
      direction = 'down';
      createSnake();
      break;
    case 37:
    case 65:
      direction = 'left';
      createSnake();
      break;
    case 39:
    case 68:
      direction = 'right';
      createSnake();
      break;
    default:
      createSnake();
  }
}


function checkBoundaries() {

// X Axis
  if(snakeHead.x > board.width - 15 || snakeHead.x < 0) {
    alert('GAME OVER!!');
    // reset();
  }

  // // Y Axis
  if(snakeHead.y > board.height - 15 || snakeHead.y < 0) {
    alert('GAME OVER!!');
    // reset();
  }
  
}

// function grow() {
//   newLink = {x:snakeTail.x - snakeSpeed, y:snakeTail.y - snakeSpeed}
//   snake.push(newLink);
//   // snake.unshift(newLink);
//   // snake.pop();
//   console.log('new snake',snake)
// }



