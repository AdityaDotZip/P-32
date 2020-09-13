
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var world, engine, gamestate, lives;
var launcher1, slingshot,ground1, ground2;
var box2, box3, box4, box5, box01,box1, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var score = 0;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	lives = 5;
	gamestate = "onsling";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 launcher1 = new Launcher(100 ,420);
	 slingshot = new Sling(launcher1.body,{x:100, y:420});	
	 ground1 = new Ground(510, 365);
	 ground2 = new Ground(900, 245);
	//obstacle1

	//ground lvl
	box1 = new Box(510, 325);
	box2 =new Box(540,325);
	box3 = new Box(570, 325);
	box4 = new Box(480, 325);
	box5 = new Box(450, 325);
	box6 = new Box(420, 325);
	box7 = new Box(600, 325);
	
	//lvl2
	box8 = new Box(450, 295);
	box9 = new Box(480, 295);
	box10 = new Box(510, 295);
	box11 = new Box(540, 295);
	box12 = new Box(570, 295);

	//lvl3
	box13 = new Box(480, 265);
	box14 = new Box(510, 265);
	box15 = new Box(540, 265);

	//lvl4
	box16 = new Box(510, 235);


	//obstacle2

	//ground lvl
	box01 = new Box(900, 215);
	box02 =new Box(900,215);
	box03 = new Box(900, 215);
	box04 = new Box(900, 215);
	box05 = new Box(900, 215);
	box06 = new Box(900, 215);
	box07 = new Box(900, 215);
	
	//lvl2
	box08 = new Box(900, 185);
	box09 = new Box(900, 185);
	box010 = new Box(900, 185);
	box011 = new Box(900, 185);
	box012 = new Box(900, 185);

	//lvl3
	box013 = new Box(900, 155);
	box014 = new Box(900, 155);
	box015 = new Box(900, 155);

	//lvl4
	box016 = new Box(900, 125);

	Engine.run(engine);
  
}


function draw() {
  background("blue");
//   console.log(slingshot.bodyA);
//   console.log(mouseY);

  launcher1.display();
  slingshot.display();
  ground1.display();
  ground2.display();

  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();
  box13.display();
  box13.score();
  box14.display();
  box14.score();
  box15.display();
  box15.score();
  box16.display();
  box16.score();
  
  box01.display();
  box01.score();
  box02.display();
  box02.score();
  box03.display();
  box03.score();
  box04.display();
  box04.score();
  box05.display();
  box05.score();
  box06.display();
  box06.score();
  box07.display();
  box07.score();
  box08.display();
  box08.score();
  box09.display();
  box09.score();
  box010.display();
  box010.score();
  box011.display();
  box011.score();
  box012.display();
  box012.score();
  box013.display();
  box013.score();
  box014.display();
  box014.score();
  box015.display();
  box015.score();
  box016.display();
  box016.score();
	
  textSize(42);
  text(lives+" Lives left", 500, 40);

  textSize(32);
	text("Score : "+score, 800, 40);

  if(lives === 0){
	  textSize(42);
	  text("Game Over", 500,90);
  }

  console.log(box16.Visiblity);

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32 && gamestate === "launched" && lives>0){
		gamestate = "onsling";
		Matter.Body.setPosition(launcher1.body,{x:100, y:420});
		Matter.Body.setVelocity(launcher1.body, {x:0, y:0});
		slingshot.attach(launcher1.body);
		lives -=1;
	}
}

function mouseDragged(){
    if(gamestate !== "launched"){
   		Matter.Body.setPosition(launcher1.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gamestate = "launched"
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      background("orange");
  }
  else{
     background("blue");
  }

}
