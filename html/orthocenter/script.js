const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200),15,"blue","A",true);
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




  S.position.dx = k.intersection(s).x;
  S.position.dy = k.intersection(s).y




  A.draw(context);
  B.draw(context);
  C.draw(context);


  l.defineLineWithTwoPoints(A,B);

  l.draw(context);











  m.defineLineWithTwoPoints(C,B);
  m.draw(context);

  j.defineLineWithTwoPoints(C,B);
  j.slope = -1/l.slope;
  j.intercept = C.position.dy - j.slope*C.position.dx;
  j.draw(context);


  n.defineLineWithTwoPoints(A,C);
  n.draw(context);

  s.defineLineWithTwoPoints(A,C);
  s.slope = -1/m.slope;
  s.intercept = A.position.dy - s.slope*A.position.dx;
  s.draw(context);

  k.defineLineWithTwoPoints(B,A);
  k.slope = -1/n.slope;
  k.intercept = B.position.dy - k.slope*B.position.dx;
  k.draw(context);




  //S.draw(context);


}
