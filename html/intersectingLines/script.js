const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200),15,"red","A",true);
let B = new Point(new Vector2d(500,200),15,"blue","B",true);
let C = new Point(new Vector2d(600,600),15,"red","C",true);
let D = new Point(new Vector2d(250,100),15,"blue","D",true);

let S = new Point(new Vector2d(10,100),10,"white");

let grid = new Grid();

let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);



function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  grid.draw(context);
  l.defineLineWithTwoPoints(A,B);
 l.draw(context);

 m.defineLineWithTwoPoints(C,D);
 m.draw(context);

 S.position.dx = l.intersection(m).x;
 S.position.dy = l.intersection(m).y

  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);
  S.draw(context);

}

animate();
