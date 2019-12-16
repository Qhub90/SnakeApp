let board;
let boardContext;

let snake = [{x:200, y:300},{x:190, y:300},{x:180, y:300},{x:170, y:300}];
let snakeL = 25;
const snakeH = 25;
let snakeSpeed = 10;
let snakeHead = snake[0];
let snakeTail = snake[snake.length - 1];
let nextStep = {
  
};

let ballX = 412;
let ballY = 312;
let direction;

window.onload = function() {
  board = this.document.getElementById('gameBoard');
  boardContext = board.getContext('2d'); 
  drawBoard();
  slither();
  createBall();

  setInterval(function() {
    drawBoard();
    slither();
    createBall();
    checkBoundaries();

  }, 100);

   document.addEventListener('keydown', (event) => {
    snakeCommands(event)
  })
   
}

function drawBoard() {
  boardContext.fillStyle = 'black';
  boardContext.fillRect(0, 0, board.width, board.height);
}

function createBall() {
  if(snakeHead.y <= ballY && snakeHead.y+snakeH > ballY && snakeHead.x <= ballX && snakeHead.x+snakeL > ballX){
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

function slither() {
    snake.forEach(link => {
    boardContext.fillStyle = 'green';
    boardContext.fillRect(link.x, link.y, snakeH, snakeL);
    
  }) ;

 switch(direction){
  case 'up':
    snake.pop();
    snakeHead.y -= snakeSpeed;
    nextStep ={x:snakeHead.x, y:snakeHead.y};
    snake.unshift(nextStep);
    break;
  case 'down':
    snake.pop();
    snakeHead.y += snakeSpeed;
    nextStep ={x:snakeHead.x, y:snakeHead.y};
    snake.unshift(nextStep);          
    break;
  case 'left':
    snake.pop();
    snakeHead.x -= snakeSpeed;
    nextStep ={x:snakeHead.x, y:snakeHead.y};
    snake.unshift(nextStep);
    break
  case 'right':   
    snake.pop();
    snakeHead.x += snakeSpeed;
    nextStep ={x:snakeHead.x, y:snakeHead.y};
    snake.unshift(nextStep);
  default:
    console.log('dead')
 } 
}


function snakeCommands(event) {
  action = event.keyCode;
  
  switch(action) {
    case 38:
    case 87:
      if(direction !== 'down'){
          direction = 'up';}
           else{
          slither();}
      break;
    case 40:
    case 83:
        if(direction !== 'up'){
          direction = 'down';}
           else{
          slither();
        }      
      break;
    case 37:
    case 65:
        if(direction !== 'right'){
          direction = 'left';}
           else{
          slither();
         }
      break;
    case 39:
    case 68:
        if(direction !== 'left'){
          direction = 'right';}
           else{
          slither();
         }      
      break;
    default:
      slither();
  }
}

function grow() {
  newLink = {x:snakeTail.x,
             y:snakeTail.y}
  snake.push(newLink);

}

function checkBoundaries() {

// X Axis
  if(snakeHead.x > board.width - 10 || snakeHead.x < 0) {
    alert('GAME OVER!!');
    // reset();
  }

  // // Y Axis
  if(snakeHead.y > board.height - 10 || snakeHead.y < 0) {
    alert('GAME OVER!!');
    // reset();
  }

  // for(let i = 0; i < snake.length; i++) {
  //   if(nextStep.y === snake[i].y && nextStep.x === snake[i].x){
  //     alert('Games Over')
  //   }
  // }

  
}

