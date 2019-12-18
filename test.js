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

let snake = [{x:200, y:300},{x:190, y:300},{x:180, y:300},{x:170, y:300}];
console.log(snake)


let snakeCopy = [];

function test() {
  for (let index = 0; index < snake.length; index++) {

    snakeCopyLink ={x:snake[index].x, y:snake[index].y};
    snakeCopy.push(snakeCopyLink);
    
  }
  return snakeCopy;

}


test();
console.log('copy', snakeCopy);

