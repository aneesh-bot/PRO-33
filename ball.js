class Ball{
    constructor(x,y,radius){
        var opt = {
            'restitution': 0.5,
            'density': 1.2
        }
        this.body = Bodies.circle(x,y,15,opt);
        this.width = 15;
        this.height = 15;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

        rectMode(CENTER);
        
        fill(random(0,255),random(10,255),random(10,255));
        ellipse(pos.x,pos.y,this.width,this.height);
        
    }
}