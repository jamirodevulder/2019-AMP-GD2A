class Grid{
    constructor(color,dx,dy,xmod,ymod)
    {
        this.color = "rgba(0,0,0,0.4)" || color;
        this.dx = 20 || dx;
        this.dy = 20 || dy;
        this.xmod = 100 || xmod;
        this.ymod = 100 || ymod;
    }

    draw(context)
    {
        for (let y = 0; y < canvas.height; y += this.dy)
        {
            if(y%this.ymod == 0) context.lineWidth  = 3;
            else context.lineWidth  = 1;
            context.beginPath();
            context.moveTo(0,y);
            context.strokeStyle = this.color;
            context.lineTo(canvas.width, y);
            context.closePath();
            context.stroke();
        }
        for (let x = 0; x < canvas.width; x += this.dx)
        {
            if(x%this.xmod == 0) context.lineWidth  = 3;
            else context.lineWidth  = 1;
            context.beginPath();
            context.moveTo(x,0);
            context.strokeStyle = this.color;
            context.lineTo(x,canvas.height);
            context.closePath();
            context.stroke();
        }
    }
}
