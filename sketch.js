const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var football,ground;
var goalpost,player;
function preload(){
  player = loadImage("images/player1.jpg")
}
function setup() {
  createCanvas(1300,600);
 engine = Engine.create()
 world = engine.world
 football = new Football(200,10,10,10)
 ground = new Ground(650,590,1300,10)
 goalpost = new Goalpost(1000,380,400,400)
}

function draw() {
  background(255,255,255); 
  Engine.update(engine) 
  football.display()
    ground.display()
  goalpost.display()
  image(player,50,340,200,300)
}