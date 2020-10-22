
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,glass,g1,g2,paperimg;




function preload(){

	ball = loadImage("paper.png");
	glass = loadImage("dustbingreen..png");
}
	


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(750,600,2000,20);

	ball = new Ball(200,400,20,20)

	glass = new Glass(590,10,10,30)
	g1 = new Glass(615,10,40,10)
	g2 = new Glass(630,10,10,30)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  glass.display();
  g1.display();
  g2.display();

  

  
  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

	Matter.Body.applyForce(ball.body, ball.body.position,{x:12,y:-12});
	

}


}



