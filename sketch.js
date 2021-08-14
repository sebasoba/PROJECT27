
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);
	
	ball = new Ball(810,160,70,70);
 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1,bobObject2,bobObject3,bobObject4;

	constructor(body1,body2,offsetX,offsetY)

    this.offsetX=offsetX
	this.offsetY=offsetY
    var options={
	 bodyA:body1,
	 bodyB:body2,
	 pointB:{x:this.offsetX,y:this.offsetY}
	}

	this.rope=Constraint.create(options)
	World.add(world,this.rope)

	Engine.run(engine);
  
}


function draw() {
 
  rectMode(CENTER);
  background(0);
  rope1=new rope(bobObject1.body,roofObject.body-bobDiameter*2,0)
  rope2=new rope(bobObject1.body,roofObject.body-bobDiameter*2,0)
  rope3=new rope(bobObject1.body,roofObject.body-bobDiameter*2,0)
  rope4=new rope(bobObject1.body,roofObject.body-bobDiameter*2,0)
  
  ground.display();
  ball.display();
  drawSprites();
 
}



