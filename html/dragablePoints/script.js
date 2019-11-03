const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let point = new Point(new Vector2d(300,400),20,'yellow','1',true);

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height)
  point.draw(context);
  point.drag();
}

animate();
