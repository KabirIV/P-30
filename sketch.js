
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree;
var ground;
var stoneobject;
var mango1,mango2,mango3,mango4,mango5;
var options ={
	isStatic:8,
	restitution:0,
	friction:1,
	density:1.2,
function preload()
{
	this.image=loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  background(0);
  
  drawSprites();
 
}



