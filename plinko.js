class Plinko{
    constructor(x,y,radius){
        var opt = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,10,opt);
        this.width = 10;
        this.height = 10;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        
        rectMode(CENTER);
        
        fill(255);
        ellipse(pos.x,pos.y,this.width,this.height);
        
    }
}