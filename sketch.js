
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob (400,400,30);
	bobObject2 = new Bob (460,400,30);
	bobObject3 = new Bob (340,400,30);
	bobObject4 = new Bob (520,400,30);
	bobObject5 = new Bob (280,400,30);

	thing = new Roof(400,100,400,30);

	sling = new SlingShot(bobObject1.body,{x:400,y:100});
	sling1 = new SlingShot(bobObject2.body,{x:460,y:100});
	sling2 = new SlingShot(bobObject3.body,{x:340,y:100});
	sling3 = new SlingShot(bobObject4.body,{x:520,y:100});
	sling4 = new SlingShot(bobObject5.body,{x:280,y:100});


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(232,184,161);
  sling.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  thing.display();

  
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:-200,y:0})
	}
	if (keyCode=== DOWN_ARROW){
		Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:200,y:0})
		Matter.Body.applyForce(bobObject4.body,bobObject4.body.position,{x:200,y:0})
	}
}
