class Ground{
 constructor() {
  var opt = {
   isStatic: true
  }
  this.body  = Bodies.rectangle(width/2,height/2,width,20);
  this.width = width;
  this.height = 10;

  World.add(world,this.body);

 }
 display(){
     rectMode(CENTER);
     fill("yellow");
     rect(width/2,height,width,25);
 }
}