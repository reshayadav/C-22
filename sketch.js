const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground;
var ball;

var myEngine, myWorld;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var ground_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,380,400,20,ground_options);
  World.add(myWorld, ground);
  var ball_options={
    restitution : 0.6,
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(myWorld, ball);

}

function draw() {
  background(0);  

  Engine.update(myEngine);
  rectMode(CENTER);
  fill ("white");
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
}
