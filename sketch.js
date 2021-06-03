
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3
var world,boy;
var stone;
var slingshot;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
mango2=new mango(1200,120,30);
mango3=new mango(1000,80,30)


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	 stone=new Stone(247,420,20)

	 slingshot = new SlingShot(stone.body,{x:247, y:420});
	Engine.run(engine);


  
}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  detectcollission(stone,mango1)
  detectcollission(stone,mango2)
  detectcollission(stone,mango3)
 


  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  stone.display();
  groundObject.display();
  slingshot.display();

  
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
 
function detectcollission(stone,mango){
mangoBodyPosition=mango.body.position;
stoneBodyPosition=stone.body.position;

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
console.log(distance)
if(distance<=mango.r+stone.r)
{
	Matter.Body.setStatic(mango.body,false);
}
}
 function keyPressed(){
   if(keycode===32){
     Matter.Body.setPosition(stone.body,{x:235,y:420})
     slingshot.attach(stone.body);
   }
 }

 