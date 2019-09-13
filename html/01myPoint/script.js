const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


let radius = 1;
let count = 0;
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let balls = [];
let countup = true;
drawBalls();






function drawBalls(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(drawBalls);
  let x = Math.floor(Math.random() * Math.floor(canvas.width));
  let y = Math.floor(Math.random() * Math.floor(canvas.height));

  var r = getRandomInt(0, 255);
  var g = getRandomInt(0, 255);
  var b = getRandomInt(0, 255);


  let ball = new Point(new Vector2d(x,y),radius, "rgb(" + r + "," + g + "," + b + ")")
if(balls.length < 10)
{
  balls.push(ball);
}


  for (var i = 0; i < balls.length; i++) {



    balls[i].radius = 40;

    balls[i].label = i;
    balls[i].draw(context);

  }





}


let mouseVector = new Vector2d(0,0);
let difference = new Vector2d(0,0);
addEventListener('mousedown',mouseHandler);

function mouseHandler(evt){
  for(let i=0; i<balls.length; i++){
    mouseVector.dx = evt.clientX;
    mouseVector.dy = evt.clientY;
    console.log(mouseVector);
    console.log(balls[i].position);
    difference.differenceVector(balls[i].position,mouseVector);
    console.log(difference)
    console.log(difference.magnitude);
  if(difference.magnitude<balls[i].radius){
    console.log("SUCC");
    balls[i].color = "red";
  }
}
}
