
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy, stones;

function preload(){
	boy=loadImage("images/boy.png");

  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1200,100,30);
	mango2=new mango(1000,100,30);
	mango3=new mango(1070,150,30);
	mango4=new mango(1100,150,30);
	mango5=new mango(1150,200,30);
	mango6=new mango(1240,200,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
stone = Bodies.circle(100, 100, 30);
World.add(world, stone);

slingShot = new Slingshot(this.stone,{x:230,y:420});	
Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);


  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

detectCollision();

  ellipseMode(CENTER);
  ellipse(stone.position.x, stone.position.y, 30);

  slingShot.display();

  groundObject.display();



}

 

function mouseDragged(){
	Matter.Body.setPosition(this.stone,{x:mouseX,y:mouseY});
  }

  function mouseReleased(){
	slingShot.fly();
   }

   function detectCollision(){

    if(stone.position.x - mango1.body.position.x < stone.diameter/2 + mango1.body.diameter/2 &&
      mango1.body.position.x - stone.position.x < stone.diameter/2 + mango1.body.diameter/2 &&
      mango1.body.position.y - stone.position.y < stone.diameter/2 + mango1.body.diameter/2 &&
      stone.position.x - mango1.body.position.x < stone.diameter/2 + mango1.body.diameter/2 ){
  Matter.Body.setStatic(mango1.body, false)
      }


   }