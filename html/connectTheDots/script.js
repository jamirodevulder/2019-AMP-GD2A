const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;
let amountofballs = 3;
canvas.width = width;
canvas.height = height;


let radius = 10;
let count = 0;

setInterval(resetballs, 5000)
function resetballs()
{
  balls = [];
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let balls = [];
let countup = true;
drawBalls();






function drawBalls(){
  context.clearRect(0,0,canvas.width,canvas.height)
  requestAnimationFrame(drawBalls);
  let x = Math.floor(Math.random() * Math.floor(canvas.width));
  let y = Math.floor(Math.random() * Math.floor(canvas.height));

  var r = getRandomInt(0, 255);
  var g = getRandomInt(0, 255);
  var b = getRandomInt(0, 255);


  let ball = new Point(new Vector2d(x,y),radius, "rgb(" + r + "," + g + "," + b + ")", "point")
  if(balls.length < 4)
  {
  balls.push(ball);
  }



  context.fillStyle = "yellow"
  context.beginPath();
  context.moveTo(balls[0].position.dx,balls[0].position.dy);
  for (var i = 0; i < balls.length; i++) {
    context.lineWidth = 2;
    context.lineTo(balls[i].position.dx,balls[i].position.dy);
  }
  context.closePath();
  context.fill();
  context.stroke();
  for (var i = 0; i < balls.length; i++) {
    balls[i].draw(context);
  }
}
