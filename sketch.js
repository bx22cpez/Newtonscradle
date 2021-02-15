
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;

var rope1,rope2,rope3,rope4,rope5;

var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(200,450,20,20);
	bob2 = new Bob(300,450,20,20);
	bob3 = new Bob(400,450,20,20);
	bob4 = new Bob(500,450,20,20);
	bob5 = new Bob(600,450,20,20);

	rope1 = new Rope(bob1.body,roof.body, -bobDiameter*2,0);

	roof = new Roof(400,100,500,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  
  drawSprites();
 
}



