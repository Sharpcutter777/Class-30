const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var button;
var bg_img, fruitImg , rabbit, bunny;

function preload(){
  bg_img = loadImage("background.png");
  fruitImg = loadImage("melon.png");
  rabbit = loadImage("Rabbit-01.png")
}



function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);

  bunny = createSprite(250,630)
  bunny.addImage(rabbit)
  bunny.scale=0.2

  button=createImg("cut_button.png")
  button.position(220,30)
  button.size(50,50)

  button.mouseClicked(drop)

  
  
}
function drop(){
  rope.break();
  fruit_con.detach();
  fruit_con=null;
}

function draw() 
{
  //background(51);

  imageMode(CENTER)
  image(bg_img, width/2 , height/2,500,700)
  rope.show();


  image(fruitImg,fruit.position.x,fruit.position.y,60,60);
  Engine.update(engine);
  ground.show();


  

 
   drawSprites();
}
