
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var dustbinObj, paperObject,groundObject	
var world;
var paperImg , dustbinImg

function preload() {
	backgroundImg = loadImage("FORTNITE.jpg");
   
}


function setup() {
	createCanvas(1600 , 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,550);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	log1 = new log(1200,400)
	chain = new Chain (log1.body,paperObject.body)

	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
 chain.display();
 log1.display();
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}





