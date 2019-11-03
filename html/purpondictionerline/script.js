const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200),15,"red","A",true);
let B = new Point(new Vector2d(300,200),15,"blue","B",true);
let C = new Point(new Vector2d(600,600),15,"yellow","C",true);

let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);

let S = new Point(new Vector2d(10,100),10,"white");

let grid = new Grid();
animate();
function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  grid.draw(context);



  A.draw(context);
  B.draw(context);
  C.draw(context);


  l.defineLineWithTwoPoints(A,B);
  l.draw(context);

  m.defineLineWithTwoPoints(C,B);
  m.slope = -1/l.slope;
  m.intercept = C.position.dy - m.slope*C.position.dx;
  m.draw(context);


  S.position.dx = l.intersection(m).x;
  S.position.dy = l.intersection(m).y
  S.draw(context);

}
