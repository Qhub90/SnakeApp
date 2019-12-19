// let originalObj = {name:'Quentin', age:29, profession:'Realtor'};

// let duplicateObj = originalObj;

// console.log('duplicateObj', duplicateObj);

// duplicateObj.age = 30;

// console.log('changed duplicateObj', duplicateObj);

// console.log('originalObj', originalObj);


// array1=[{name:'Q', age:25}, {name:'Terry', age:30}, {name:'Sean', age:26}];

// array2=[{animal:'turtles', color:'red'},{animal:'dog', color:'blue'}, {animal:'cat', color:'orange'}]


// for(let i = 0; i < array1.length; i++) {
//   console.log('array1', array1[i]);
//   console.log('array2', array2[i]);

// }

// console.log(snake)


// let snakeCopy = [];

// function test() {
//   for (let index = 0; index < snake.length; index++) {

//     snakeCopyLink ={x:snake[index].x, y:snake[index].y};
//     snakeCopy.push(snakeCopyLink);
    
//   }
//   return snakeCopy;

// }


// test();
// console.log('copy', snakeCopy);

let snake = [{x:200, y:300},{x:190, y:300},{x:180, y:300},{x:170, y:300}];
// let snakeClone= [];

function slither() {
  // test();
  
  snakeClone = snake.map(link => ({ x: link.x, y: link.y}));
}
slither();
  console.log(snakeClone)

  // move snake head in the current direction
//   switch (direction) {
//     case "up":
//       snake[0].y -= snakeSpeed;
//       break;
//     case "down":
//       snake[0].y += snakeSpeed;
//       break;
//     case "left":
//       snake[0].x -= snakeSpeed;
//       break;
//     case "right":
//       snake[0].x += snakeSpeed;
//     // nextStep ={x:snake[0].x, y:snake[0].y};
//     // snake.unshift(nextStep);
//       break;
//     default:
//       throw new Error('invalid direction');
//   }
//   // move each following piece where the parent was
//   for (let i = 1; i < snake.length; i++) {
//     const parent = snakeClone[i - 1];
//     if (snake[0].y === snake[i].y && snake[0].x === snake[i].x) {
//       console.log("Over");
//     } 
//     snake[i].x = parent.x;
//     snake[i].y = parent.y;
//   }
// }

