const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var ground;
var divisions;
var divisionHeight = 300;
var plinko;
function setup() {

  var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    ball =new Ball(random(width/2-10,width/2+10),30,25,{isStatic: false});
ground = new Ground()

}

function draw() {
  background(0);
  Engine.update(engine);
 
  ground.display();
  for(var k = 0;k<=width;k = k + 80){
    divisions = new Division(k,height-divisionHeight/2, 7.5, divisionHeight);
    divisions.display();
    }
      ball.display();
   
PlinkoSpawn();
}
function PlinkoSpawn(){
  for (var p = 0; p <= width; p = p + 45) {
    plinko = new Plinko(p,190);
    plinko.display();
  }
   for (var p = 20; p <= width; p = p + 45) {
    plinko = new Plinko(p,240,15);
    plinko.display();
  }
  for (var p = 0; p <= width; p = p + 45) {
    plinko = new Plinko(p,290,15);
    plinko.display();
  }
   for (var p = 20; p <= width; p = p + 45) {
    plinko = new Plinko(p,340,15);
    plinko.display();
  }

  for (var p = 0; p <= width; p = p + 45) {
    plinko = new Plinko(p,450,15);
    plinko.display();
  }
}

