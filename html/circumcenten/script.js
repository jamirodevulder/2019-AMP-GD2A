const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200),15,"blue","A",true);
let f = new Point(new Vector2d(200,200),15,"red","f",false);
let g = new Point(new Vector2d(200,200),15,"red","g",false);
let h = new Point(new Vector2d(200,200),15,"red","h",false);
let B = new Point(new Vector2d(300,200),15,"blue","B",true);
let C = new Point(new Vector2d(600,600),15,"blue","C",true);
let S = new Point(new Vector2d(10,100),10,"white", "S");




let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);
let n = new LinearFunction(1,1);
let k = new LinearFunction(1,1,"black");
let s = new LinearFunction(1,1,"black");
let c = new LinearFunction(1,1,"black");
let j = new LinearFunction(1,1,"black");


let grid = new Grid();
animate();
function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  grid.draw(context);


  f.position.dx = (A.position.dx + B.position.dx) / 2;
  f.position.dy = (A.position.dy + B.position.dy) / 2;
  g.position.dx = (C.position.dx + B.position.dx) / 2;
  g.position.dy = (C.position.dy + B.position.dy) / 2;
  h.position.dx = (C.position.dx + A.position.dx) / 2;
  h.position.dy = (C.position.dy + A.position.dy) / 2;

  S.position.dx = k.intersection(s).x;
  S.position.dy = k.intersection(s).y



  h.draw(context);
  g.draw(context);
  f.draw(context);
  A.draw(context);
  B.draw(context);
  C.draw(context);


  l.defineLineWithTwoPoints(A,B);
  l.draw(context);

  m.defineLineWithTwoPoints(B,C);
  m.draw(context);

  n.defineLineWithTwoPoints(C,A);
  n.draw(context);


  s.slope = -1 / n.slope;
  s.intercept = f.position.dy - s.lope * f.position.dx;
  s.draw(context);

  k.slope = -1 / m.slope;
  k.intercept = g.position.dy - k.slope * g.position.dx;
  k.draw(context);




  //j.draw(context);




  S.draw(context);


}
