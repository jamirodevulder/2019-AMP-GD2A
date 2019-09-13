class Point {
constructor(position,radius,color,label){
  this.position = position;
  this.radius = radius || 20;
  this.color = color;
  this.label = label;
}


    draw(context){
      context.beginPath()
      context.arc(this.position.dx,this.position.dy,this.radius,0,2*Math.PI);
      context.fillStyle = this.color;
      context.font = "30px Arial";
      context.fillText(this.label, this.position.dx, this.position.dy -50);
      context.fill();
      context.stroke();

    }
}
