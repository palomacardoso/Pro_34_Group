const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var fruit;

function preload(){
   //add as imgs
   backgroundImg = loadImage("background.png");
   fruit = loadImage("melon.png");
   g = loadImage("basket.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  
  //criando a bola
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  //criando a restrição
  slingShot = new Slingshot(this.ball,{x:100,y:100});

}
function draw() {
  background(backgroundImg); 
 
  //exibindo chão
  ground.display();
  g.scale = 0.25;

  imageMode(CENTER)
  image(fruit ,ball.position.x,ball.position.y,40,40);
  image(g,450,270)

  slingShot.display();
}

//ao arrastar o mouse a fruta vai junto
function mouseDragged(){ //arrasto o mouse
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

//ao soltar o mouse a restrição é excluida
function mouseReleased(){ //solta o botão do mouse
  slingShot.fly(); //some a linha que conecta a fruta e o ponto A
}
