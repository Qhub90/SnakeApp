let board;
let boardContext;

let snake = [{x:200, y:300},{x:190, y:300},{x:180, y:300},{x:170, y:300}];
let snakeClone = [];
let snakeL = 25;
const snakeH = 25;
let snakeSpeed = 10;

let nextStep = {};

let ballX = 412;
let ballY = 312;
let direction;
let collision = false;

window.onload = function() {
  board = this.document.getElementById('gameBoard');
  boardContext = board.getContext('2d'); 
  drawBoard();
  createSnake();//
  slither();//
  createBall();

  setInterval(function() {
    drawBoard();
    createSnake();//
    slither();//
    createBall();
    checkBoundaries();

  }, 1000);

   document.addEventListener('keydown', (event) => {
    snakeCommands(event)
  })
   
}


function drawBoard() {
  boardContext.fillStyle = 'black';
  boardContext.fillRect(0, 0, board.width, board.height);
}

function createSnake() {

  snake.forEach(link => {
   boardContext.fillStyle = 'green';
   boardContext.fillRect(link.x, link.y, snakeH, snakeL);
  });
   
  
}

function createBall() {
  if(snake[0].y <= ballY && snake[0].y+snakeH > ballY && snake[0].x <= ballX && snake[0].x+snakeL > ballX){
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

  // test();

  snakeClone = [
    {x:snake[0].x, y:snake[0].y},
    {x:snake[1].x, y:snake[1].y},
    {x:snake[2].x, y:snake[2].y},
    {x:snake[3].x, y:snake[3].y}
  ]
 
  for(let i = 1; i < snake.length; i++){   
    
    const parent = snakeClone[i - 1];

    switch(direction){
      case 'up':
        snake[0].y -= snakeSpeed;
        if(snake[0].y === snake[i].y && snake[0].x === snake[i].x){
          console.log('Over')
               }else{
                     snake[i].x = parent.x;
                     snake[i].y = parent.y;
                    };
        break;
      case 'down':
        snake[0].y += snakeSpeed;
        if(snake[0].y === snake[i].y && snake.x === snake[i].x){
          console.log('Over')
               }else{snake[i].x = parent.x;
                     snake[i].y = parent.y;};          
        break;
      case 'left':
          snake[0].x -= snakeSpeed;
          if(snake[0].y === snake[i].y && snake.x === snake[i].x){
            console.log('Over')
                 }else{snake[i].x = parent.x;
                       snake[i].y = parent.y;};
        break
      case 'right':   
        snake[0].x += snakeSpeed;
        if(snake[0].y === snake[i].y && snake.x === snake[i].x){
          console.log('Over')
               }else{snake[i].x = parent.x;
                     snake[i].y = parent.y;};
               
        // nextStep ={x:snake[0].x, y:snake[0].y};
        // snake.unshift(nextStep);
      default:
        console.log('dead')
    } 
    }
}

function test(){
  for (let i = 0; i < snake.length; i++) {

    snakeCloneLink ={x:snake[i].x, y:snake[i].y};
    snakeClone.push(snakeCloneLink);
    console.log(snakeClone);
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

// function grow() {
//   newLink = {x:snakeTail.x,
//              y:snakeTail.y}
//   snake.push(newLink);

// }

function checkBoundaries() {

// X Axis
  if(snake[0].x > board.width - 10 || snake[0].x < 0) {
    reset();
  }

  // // Y Axis
  if(snake[0].y > board.height - 10 || snake[0].y < 0) {
    reset();
  }

  // for(let i = 0; i < snake.length; i++) {
  //   if(snake[0].y === snake[i].y && snake[0].x === snake[i].x){
  //     collision = true;
  //   }
  // }

  
}

function reset() {
  
}

