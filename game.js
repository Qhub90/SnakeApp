let board;
let boardContext;

let snake = [
  { x: 200, y: 300 },
  { x: 190, y: 300 },
  { x: 180, y: 300 },
  { x: 170, y: 300 }
];

let snakeL = 25;
const snakeH = 25;
let snakeSpeed = 10;

let direction = "right";

let ballX = 412;
let ballY = 312;

let score = 0;

window.onload = function() {
  board = this.document.getElementById("gameBoard");
  boardContext = board.getContext("2d");
  drawBoard();
  createSnake(); //
  createBall();
  slither(); //
  gameOn();

  setInterval(function() {
    drawBoard();
    createSnake(); //
    slither(); //
    createBall();
    checkBoundaries();
  }, 100);

  document.addEventListener("keydown", event => {
    snakeCommands(event);
  });
};

function drawBoard() {
  boardContext.fillStyle = "black";
  boardContext.fillRect(0, 0, board.width, board.height);
}

function createSnake() {
  snake.forEach(link => {
    boardContext.fillStyle = "green";
    boardContext.fillRect(link.x, link.y, snakeH, snakeL);
  });

}

function createBall() {   
    boardContext.fillStyle = "red";
    boardContext.beginPath();
    boardContext.arc(ballX, ballY, 10, 0, Math.PI * 2, true);
    boardContext.fill();
  
}

function snakeCommands(event) {
  action = event.keyCode;

  switch (action) {
    case 38:
    case 87:
      if (direction !== "down") {
        direction = "up";
      } else {
        slither();
      }
      break;
    case 40:
    case 83:
      if (direction !== "up") {
        direction = "down";
      } else {
        slither();
      }
      break;
    case 37:
    case 65:
      if (direction !== "right") {
        direction = "left";
      } else {
        slither();
      }
      break;
    case 39:
    case 68:
      if (direction !== "left") {
        direction = "right";
      } else {
        slither();
      }
      break;
    default:
      slither();
  }
}

function slither() {
  snakeClone = snake.map(link => ({ x: link.x, y: link.y }));
  // move snake head in the current direction

  switch (direction) {
    case "up":
      snake[0].y -= snakeSpeed;
      break;
    case "down":
      snake[0].y += snakeSpeed;
      break;
    case "left":
      snake[0].x -= snakeSpeed;
      break;
    case "right":
      snake[0].x += snakeSpeed;
      break;
    default:
      throw new Error("invalid direction");
  }
  // move each following piece where the parent was
  for (let i = 1; i < snake.length; i++) {
    const parent = snakeClone[i - 1];

    snake[i].x = parent.x;
    snake[i].y = parent.y;
  }
}

function grow() {
  score++;

  newLink = { x: snake[snake.length - 1].x, y: [snake.length - 1].y };
  snake.push(newLink);
}

function checkBoundaries() {
  for (let i = 1; i < snake.length; i++) {
      // X Axis

    if (snake[0].x > board.width - 10 || snake[0].x < 0) {
      gameOver();
    }

    //  Y Axis
    if (snake[0].y > board.height - 10 || snake[0].y < 0) {
      gameOver();
    }

    // snake collision
    if (snake[0].y === snake[i].y && snake[0].x === snake[i].x) {
      gameOver();
    }

    if (
      snake[0].y <= ballY &&
      snake[0].y + snakeH > ballY &&
      snake[0].x <= ballX &&
      snake[0].x + snakeL > ballX
    ) {
      grow();
      ballX = Math.floor(Math.random() * 78) * 10;
      ballY = Math.floor(Math.random() * 58) * 10;
    }
  }

}

function gameOn() {
  alert('Use the "WASD" or the "Arrow Keys" to move the snake. \n   \n   \n Press any key to start!!');

}

function gameOver() {
  alert(`Game Over  Your Score is ${score}`)

  snake = [
    { x: 200, y: 300 },
    { x: 190, y: 300 },
    { x: 180, y: 300 },
    { x: 170, y: 300 }
  ];

  score = 0;

  direction = "right";

  ballX = 412;
  ballY = 312;

}
