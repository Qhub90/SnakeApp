let board;
let boardContext;

const centerX = 400;
const centerY = 300

let snake = [];
let snakeX = 250;
let snakeY = 250;


window.onload = function() {
  board = this.document.getElementById('gameBoard');
  boardContext = board.getContext('2d'); 
  drawBoard();
  createSnake();
  createPrey();

  this.setInterval(function() {
    drawBoard();
    createSnake();
    createPrey();

  }, 1000);

   document.addEventListener('keydown', (event) => {
    snakeMovement(event)
  })
   
}

function drawBoard() {
  boardContext.fillStyle = 'black';
  boardContext.fillRect(0, 0, board.width, board.height);
}


function createSnake(direction) {
  snake = [ {x:snakeX, y: snakeY, snakeW: 50, snakeL:25 } ]

    snake.forEach(link => {
    boardContext.fillStyle = 'green';
    boardContext.fillRect(link.x, link.y, link.snakeW, link.snakeL);
  })

  switch(direction){
  case 'up':
    snakeY -= 10;
    break;
  case 'down':
    snakeY += 10;
    break;
  case 'left':
    snakeX -= 10;
    break
  case 'right':
    snakeX += 10;
  default:
    console.log('what?')
} 
  
  console.log(snake)

}

function createPrey() {
  boardContext.fillStyle = 'red';
  boardContext.beginPath();
  boardContext.arc(centerX,centerY,10,0,Math.PI*2, true);
  boardContext.fill();
}

// MOVEMENT

// function checkBoundaries() {

// // X Axis
//   if(snakeX > board.width - 45 || snakeX < 0) {
//     // alert('GAME OVER!!')
//   }

//   // Y Axis
//   if(snakeY > board.height - 45 || snakeY < 0) {
//     // alert('GAME OVER!!')
//   }
// }


function snakeMovement(event) {
  action = event.keyCode;
  let direction;

  switch(action) {
    case 38:
    case 87:
      console.log('You pressed Up!');
      direction = 'up';
      createSnake(direction);
      break;
    case 40:
    case 83:
      console.log('You pressed Down!');
      direction = 'down';
      createSnake(direction);
      break;
    case 37:
    case 65:
      console.log('You pressed Left!');
      direction = 'left';
      createSnake(direction);
      break;
    case 39:
    case 68:
      console.log('You pressed Right!');
      direction = 'right';
      createSnake(direction);
      break;
    default:
      console.log('default') ;
  }
}

