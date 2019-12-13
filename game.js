let board;
let boardContext;

let snake = [{x:200, y:300},{x:190, y:300},{x:180, y:300},{x:170, y:300}];
let snakeL = 25;
const snakeH = 25;
let snakeSpeed = 10;
let snakeHead = snake[0];
let snakeTail = snake[snake.length - 1];
let nextStep = {

}

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
  if(snakeHead.y <= ballY && snakeHead.y+snakeH > ballY && snakeHead.x <= ballX && snakeHead.x+snakeL > ballX){
    // grow();
    console.log('temp')
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

  nextStep = {
    x: snakeHead.x + snakeSpeed,
    y: snakeHead.y + snakeSpeed
};


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

// I feel like I need this somewhere but cant figure out if I need to move things around or not.

  // for(let i = 0; i < snake.length; i++){
  //    snake[i-1] = snake[i+1];

  // }
  
//   switch(direction){
//   case 'up':
//     break;
//   case 'down':
//       snakeHead.y += snakeSpeed;
//     break;
//   case 'left':
//       snakeHead.x -= snakeSpeed;
//     break
//   case 'right':
//       snakeHead.x += snakeSpeed;
//   default:
//     console.log('dead')
// } 

  // console.log(snake[i].x, snake[i].y)

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
//   newLink = {x:snakeTail.x,
//              y:snakeTail.y}
//   snake.push(newLink);

// }



