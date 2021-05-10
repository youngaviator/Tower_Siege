class Stand{
    constrctor(x,y,widthheight){
        var options = {
            isStatic :true
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
         push();
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER)
        RECT(0,0,this.width, this.height);
        pop();
}
}