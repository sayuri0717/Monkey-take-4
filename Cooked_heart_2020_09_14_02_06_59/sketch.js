var stone, stoneImg;
var ground, groundImg;
var banana, bananaGroup ,bananaImg;
var  monkeyGroup, monkey1, monkey2, monkey3, monkey4, monkey5, monkey6, monkey7, monkey8, Monkey;
var count;


function preload(){
 monkey1 = loadImage ("Monkey_01.png");
 monkey2 = loadImage ("Monkey_02.png");
 monkey3 = loadImage ("Monkey_03.png"); 
 monkey4 = loadImage ("Monkey_04.png"); 
 monkey5 = loadImage ("Monkey_05.png"); 
 monkey6 = loadImage ("Monkey_06.png");
 monkey7 = loadImage ("Monkey_07.png"); 
 monkey8 = loadImage ("Monkey_08.png"); 
  
  
  bananaImg = loadImage ("banana.png"); 
  stoneImg = loadImage("stone.png");
  
  bananaGroup = new Group ();
  stoneGroup = new Group ();
}

function setup() {
  createCanvas(600, 200);
  
  Monkey = createSprite(50,180,20,50);
  Monkey.addImage(monkey1,monkey2,monkey3,monkey4,monkey5,monkey6,monkey7,monkey8);
  Monkey.scale = 0.1;
  
  ground = createSprite(200,180,400,20);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  count=0;
}

function draw() {
  background(180);
  
  count = count + (Math.round(getFrameRate() /60));
  text("Score: "+ count, 500, 100);
  
  if(keyDown("space")) {
    Monkey.velocityY = -10;
  }
  
  Monkey.velocityY = Monkey.velocityY + 0.8
 Monkey.collide(ground);
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  Monkey.collide(invisibleGround);
  
  spawnStone ();
  spawnBanana ();
  drawSprites();
} 


function spawnBanana() {
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round ( random( 80,120));
    banana.addImage (bananaImg);
    banana.scale = 0.07;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = banana.depth;
    Monkey.depth = Monkey.depth + 1;
    
    //add each banana to the group
    bananaGroup.add(banana);
    
     banana.depth = Monkey.depth;
    Monkey.depth = banana.depth + 1;
  }
  
}

function spawnStone() {
  if(frameCount % 60 === 0) {
    var stone = createSprite(600,165,10,40);
    
     stone.addImage (stoneImg);
     stone.scale= 0.2
     stone.velocityX = -6;
    stone.collide(ground);  
    
    //assign scale and lifetime to the obstacle           
   // stone.scale = 0.5;
    stone.lifetime = 100;
    stoneGroup.add (stone);
  }
}