
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;
var paper1;
var dustbin1;

function preload(){
    Dustbinimg = loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(1000, 550);

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(500,450,1000,30);
	paper1 = new Paper(150,380);

	dustbin = createSprite(700,350,20,20);
	dustbin.addImage(Dustbinimg);
	dustbin.scale = 0.55

	dustbinbottom = new Dustbin(700,430,130,20);
	dustbinleft = new Dustbin(640,350,20,175);
	dustbinright = new Dustbin(760,350,20,175);
  
}


function draw() {
  background("white");

  Engine.run(engine);
  
  ground1.display();
  paper1.display();
  dustbinleft.display();
  dustbinright.display();
  dustbinbottom.display();

  drawSprites();

}

function keyPressed(){

	if(keyCode == UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:80,y:-200})

	}
}



