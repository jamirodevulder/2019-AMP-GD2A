const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let f = new LinearFunction(1,1);



let A = new Point(new Vector2d(200,400),10,"blue", 'point', true);
let B = new Point(new Vector2d(500,300),10,"red", 'point', true);



animate();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height)
  A.draw(context); B.draw(context);
  A.drag();
  B.drag();

  context.beginPath();
      f.defineLineWithTwoPoints(A, B);

      context.moveTo(0, f.y(0));
      context.lineTo(width, f.y(width ))

      context.stroke();
      context.closePath();

  }
