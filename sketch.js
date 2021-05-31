
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;


var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12,block13,block14;
var block15,block16,ground1;
var sling;
var release=0;
var engine;
var ball;

function setup() {
  createCanvas(800,400);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;



  //CREATING BODIES

  ground1 = new Ground(390,275,300,20);

  block1=new Block(300,275,30,40);
  block2=new Block(330,275,30,40);
  block3=new Block(360,275,30,40);
  block4=new Block(390,275,30,40);
  block5=new Block(420,275,30,40);
  block6=new Block(450,275,30,40);
  block7=new Block(480,275,30,40);

  block8=new Block(330,235,30,40);
  block9=new Block(360,235,30,40);
  block10=new Block(390,235,30,40);
  block11=new Block(420,235,30,40);
  block12=new Block(450,235,30,40);

  block13=new Block(360,195,30,40);
  block14=new Block(390,195,30,40);
  block15=new Block(420,195,30,40);

  block16=new Block(390,155,30,40);

  ball=new Ball(100,100,20,20);

  

  sling=new Sling(ball.body,{x:500,y:100});

  Engine.run(engine);

}

function draw() {
  background(255,255,255); 
  
  rectMode(CENTER);
  
  background("yellow");

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  ball.display();
  sling.display();
  ground1.display();

}

function mouseDragged() {
  if(release===0){
       Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  }
}

function mouseReleased() {

   sling.fly();
   release=0.000004;


}

