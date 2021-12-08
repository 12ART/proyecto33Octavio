const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var disc;
var paddle1, paddle2;
var SlingShot;
function preload(){
  BgImg = loadImage("bg.png");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  //Disco
  disc = new Ball(405,190,50,50);

  //Raquetas
  paddle1 = new Paddle(100,190,50,50);
  paddle2 = new Paddle(710,190,50,50);

  //Resortera
  SlingShot = new Slingshot(paddle1.body,{x:100,y:190});
}

function draw() {
  background(BgImg);  
  Engine.update(engine);
  drawSprites();

  disc.display();

  paddle1.display();
  paddle2.display();

  SlingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(paddle1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  SlingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      SlingShot.attach(paddle1.body);
  }
}